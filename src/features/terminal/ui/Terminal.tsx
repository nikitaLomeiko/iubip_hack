import { useXTerm } from "react-xtermjs";
import "./style.css";
import { useEffect, useState } from "react";

export const Terminal = () => {
  const [verify, setVerify] = useState(false);
  const { instance, ref } = useXTerm();
  instance?.writeln("Hello Terminal");
  instance?.onData(async (data) => {
    await fetch("http://45.10.41.195:8088/sessions/1/io", { method: "POST", body: data });
  });
  instance?.resize(100, 100);

  useEffect(() => {
    const asyncFetch = async () => {
      while (true) {
        const data = await fetch("http://45.10.41.195:8088/sessions/1/io", { method: "GET" });
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
    <div className="rounded-lg overflow-hidden h-full ">
      <div ref={ref} className="terminal-scroll " style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
