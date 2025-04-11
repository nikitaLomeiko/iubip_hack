import { useXTerm } from "react-xtermjs";
import './style.css'

export const Terminal = () => {
  const { instance, ref } = useXTerm();
  instance?.writeln("Hello Terminal");
  instance?.onData((data) => instance?.write(data));
  instance?.resize(100, 20); 

  return (
    <div className="rounded-lg overflow-hidden h-full ">
      <div ref={ref} className="terminal-scroll " style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
