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

  useEffect(() => {
    instance?.clear()
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

    const sidebarWidth = window.innerWidth > 900 ? 290 : 0;
    const usableWidth = window.innerWidth - sidebarWidth;
    const usableHeight = window.innerHeight;

    const cols = Math.floor(usableWidth / charWidth);
    const rows = Math.floor(usableHeight / charHeight);

    instance.resize(cols, rows);
  }, [instance, containerRef]);

  instance?.onData(async (data) => {
    await fetch(`https://ыыыы.спб.рф/api/sessions/${sessionName}/io/`, { method: "POST", body: data });
  });
  instance?.resize(50, 50);

  useEffect(() => {
    const asyncFetch = async () => {
      while (true) {
        const data = await fetch("https://ыыыы.спб.рф/api/sessions/1/io/", { method: "GET" });
        const peremennaya = await data.bytes();
        instance?.write(peremennaya);

        if (sessionName) sessionStore.saveTerminal(sessionName, peremennaya);
      }
    };

    if (verify) {
      asyncFetch();
    } else {
      setVerify(true);
    }
  }, [instance]);

  return (
    <div ref={containerRef} className="rounded-lg !overflow-hidden h-full">
      <div ref={ref} className="terminal-scroll !overflow-x-scroll" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
