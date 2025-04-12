import { useXTerm } from "react-xtermjs";
import "./style.css";

export const Terminal = () => {
  const { instance, ref } = useXTerm();
  instance?.writeln("Hello Terminal");
  instance?.onData(async (data) => {
    await fetch("http://45.10.41.195:8088/sessions/1/io", { method: "POST", body: data });
  });
  instance?.resize(100, 20);

  (async function () {
    while (true) {
      const data = await fetch("http://45.10.41.195:8088/sessions/1/io", { method: "GET" }).then((data) => data.bytes());
      console.log(data);
      instance?.write(data);
    }
  })();

  return (
    <div className="rounded-lg overflow-hidden h-full ">
      <div ref={ref} className="terminal-scroll " style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
