import { useXTerm } from "react-xtermjs";
import "./style.css";
import { useEffect, useRef, useState } from "react";

const charWidth = 9;
const charHeight = 18;

export const Terminal = () => {
  const [verify, setVerify] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { instance, ref } = useXTerm();

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
    await fetch("https://ыыыы.спб.рф/api/sessions/1/io/", { method: "POST", body: data });
  });
  instance?.resize(50, 50);

  useEffect(() => {
    const asyncFetch = async () => {
      while (true) {
        const data = await fetch("https://ыыыы.спб.рф/api/sessions/1/io/", { method: "GET" });
        instance?.write(await data.bytes());
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
