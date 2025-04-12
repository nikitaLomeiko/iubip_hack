import { IServerItem } from "../model";
import DnsIcon from "@mui/icons-material/Dns";
import HomeIcon from '@mui/icons-material/Home';

interface IProps {
  server: IServerItem;
}

export const ServerPreview: React.FC<IProps> = (props) => {
  const { server } = props;

  return (
    <div className="relative w-full bg-gray-700 text-white px-4 py-2 rounded-sm">
        <div className="absolute top-2 right-2 flex flex-row text-sm items-center gap-1">
            <div className="bg-green-500/60 w-3 h-3 rounded-full"></div>
            <p className="text-green-500/60">Соединено</p>
        </div>
      <div className="flex flex-row items-center gap-2">
        <DnsIcon className="!fill-white"/>
        <h4>{server.name}</h4>
      </div>
      <div className="flex flex-row items-center gap-1 mt-4 !text-[12px]">
        <HomeIcon className="!size-4 !fill-white/60"/>
        <p>адрес:</p>
        <p className="text-white/60">{server.adress}</p>
      </div>
    </div>
  );
};
