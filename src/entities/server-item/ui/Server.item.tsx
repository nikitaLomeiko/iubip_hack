import StorageIcon from "@mui/icons-material/Storage";
import DeleteIcon from "@mui/icons-material/Delete";
import { IServerItem } from "../model";
import { observer } from "mobx-react-lite";

interface IProps {
  server: IServerItem;
  onClick: () => void;
  onRemove: () => void;
}

export const ServerItem: React.FC<IProps> = observer((props) => {
  const { onClick, onRemove, server } = props;

  return (
    <div onClick={onClick} className="flex flex-row items-center justify-between gap-2">
      <div className="flex flex-row items-center gap-2">
        <StorageIcon className="!size-4 !fill-white/70" />
        <p className="!text-sm text-white/80">{server.name}</p>
      </div>
      <div className="flex flex-row gap-2">
        <button onClick={onRemove}>
          <DeleteIcon className="!size-4 !fill-white/40" />
        </button>
      </div>
    </div>
  );
});
