import StorageIcon from "@mui/icons-material/Storage";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  value: string;
  onClick: () => void;
  onChange: () => void;
  onRemove: () => void;
}

export const ServerItem: React.FC<IProps> = (props) => {
  const { onChange, onClick, onRemove, value } = props;
  return (
    <div onClick={onClick} className="flex flex-row items-center justify-between gap-2">
      <div className="flex flex-row items-center gap-2">
        <StorageIcon className="!size-4 !fill-white/70" />
        <p className="!text-sm text-white/80">{value}</p>
      </div>
      <div className="flex flex-row gap-2">
        <button onClick={onChange}>
          <CreateIcon className="!size-4 !fill-white/40" />
        </button>
        <button onClick={onRemove}>
          <DeleteIcon className="!size-4 !fill-white/40" />
        </button>
      </div>
    </div>
  );
};
