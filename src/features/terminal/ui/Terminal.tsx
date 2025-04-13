import { useXTerm } from "react-xtermjs";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { sessionStore } from "entities/session-item";
import { useNavigate } from "react-router";
import { RoutePath } from "shared/config/route";

const charWidth = 9;
const charHeight = 18;

interface IProps {
  sessionName?: string;
}

export const Terminal: React.FC<IProps> = (props) => {
  const { sessionName } = props;

  const [verify, setVerify] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { instance, ref } = useXTerm();

  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStore.state.sessions.find((item) => item.name === sessionName)?.history) {
      sessionStore.state.sessions
        .find((item) => item.name === sessionName)
        ?.history.forEach((item) => {
          instance?.write(item);
        });
    }
  }, [instance, sessionName]);

  useEffect(() => {
    if (!instance || !containerRef.current) return;

    const request = async (x: number, y: number) => {
      await fetch(`https://ыыыы.спб.рф/api/sessions/${sessionName}/resize/`, {
        method: "POST",
        body: JSON.stringify({ x, y }),
      });
    };

    const sidebarWidth = window.innerWidth > 900 ? 290 : 0;
    const usableWidth = window.innerWidth - sidebarWidth;
    const usableHeight = window.innerHeight - 40;

    const cols = Math.floor(usableWidth / charWidth);
    const rows = Math.floor(usableHeight / charHeight);

    instance.resize(cols, rows);
    request(cols, rows);
  }, [instance, containerRef]);

  instance?.resize(50, 50);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const onDataId = instance?.onData(async (data) => {
      await fetch(`https://ыыыы.спб.рф/api/sessions/${sessionName}/io/`, { method: "POST", body: data });
    });

    let isStop = false;
    let isError = false;

    const asyncFetch = async () => {
      await fetch(`https://ыыыы.спб.рф/api/sessions/${sessionName}/io/`, { method: "GET", signal }).then(
        async (dat) => {
          if (dat.status !== 200) {
            isError = true;
          }

          const peremennaya = await dat.bytes();

          if (!isStop) {
            instance?.write(peremennaya);
            if (sessionName) sessionStore.saveTerminal(sessionName, peremennaya);
          }
          
          if (isError) {
            onDataId?.dispose();
            isStop = true;
            controller.abort();
            navigate(RoutePath.home.path)
            sessionStore.deleteSession(sessionName || '')
          }

          if (!isStop) {
            await asyncFetch();
          }

        }
      );
    };

    if (verify) {
      asyncFetch();
    } else {
      setVerify(true);
    }

    return () => {
      onDataId?.dispose();
      isStop = true;
      controller.abort();
    };
  }, [instance, sessionName]);

  return (
    <div ref={containerRef} className="rounded-lg !overflow-hidden h-full">
      <div ref={ref} className="terminal-scroll !overflow-x-scroll" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
