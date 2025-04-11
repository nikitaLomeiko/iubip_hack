import { useXTerm } from "react-xtermjs";
import './style.css'

export const Terminal = () => {
  const { instance, ref } = useXTerm();
  instance?.writeln("");
  instance?.onData((data) => instance?.write(data));
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-blue-800 flex flex-row p-1 relative">
        <div className="flex flex-row items-center gap-2">
          <div className="bg-red-600 w-4 h-4 rounded-full"></div>
          <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
          <div className="bg-green-600 w-4 h-4 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center w-full absolute left-0 top-0 p-1">
          <p className="text-white">name terminal</p>
        </div>
      </div>
      <div ref={ref} className="terminal-scroll" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
