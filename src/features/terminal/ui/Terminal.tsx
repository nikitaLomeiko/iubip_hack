import { useXTerm } from "react-xtermjs";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { sessionStore } from "entities/session-item";

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
  const [isBreakWhile, setBreakWhile] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      instance?.clear();
    }, 1000);
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
    const usableHeight = window.innerHeight;

    const cols = Math.floor(usableWidth / charWidth);
    const rows = Math.floor(usableHeight / charHeight);

    instance.resize(cols, rows);
    request(cols, rows);
  }, [instance, containerRef]);

  instance?.resize(50, 50);

  useEffect(() => {
    const onDataId = instance?.onData(async (data) => {
      await fetch(`https://ыыыы.спб.рф/api/sessions/${sessionName}/io/`, { method: "POST", body: data });
    });

    let isStop = false

    const asyncFetch = async () => {
      await fetch(`https://ыыыы.спб.рф/api/sessions/${sessionName}/io/`, { method: "GET" }).then(
        async (dat) => {
          const peremennaya = await dat.bytes();
          instance?.write(peremennaya);
          if (sessionName) sessionStore.saveTerminal(sessionName, peremennaya);

          if(!isStop){
            await asyncFetch()
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
    };
  }, [instance, sessionName]);

  return (
    <div ref={containerRef} className="rounded-lg !overflow-hidden h-full">
      <div ref={ref} className="terminal-scroll !overflow-x-scroll" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
