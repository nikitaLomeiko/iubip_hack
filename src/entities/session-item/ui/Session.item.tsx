import WatchLaterIcon from "@mui/icons-material/WatchLater";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  value: string;
  onClick: () => void;
  onRemove: () => void;
}

export const SessionItem: React.FC<IProps> = (props) => {
  const { value, onClick, onRemove } = props;

  return (
    <div onClick={onClick} className={`flex flex-row items-center justify-between gap-2 cursor-pointer`}>
      <div className="flex flex-row items-center gap-2">
        <WatchLaterIcon className="!size-4 !fill-white/70" />
        <p className="!text-sm text-white/80">{value}</p>
      </div>
      <div className="flex flex-row gap-2">
        <button onClick={onRemove}>
          <DeleteIcon className="!size-4 !fill-red-600/50" />
        </button>
      </div>
    </div>
  );
};
