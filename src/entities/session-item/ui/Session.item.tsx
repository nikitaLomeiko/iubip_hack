import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

interface IProps {
  value: string;
  onClick: () => void;
  onChange: (data: string) => void;
  onRemove: () => void;
}

export const SessionItem: React.FC<IProps> = (props) => {
  const { value, onChange, onClick, onRemove } = props;

  const [textValue, setValue] = useState(value);
  const [isChanged, setChanged] = useState(false);

  const handleSubmit = () => {
    const data = textValue.trim();

    if (data.length > 5) {
      onChange(data);
      setChanged(false)
    }
  };

  return (
    <div onClick={onClick} className={`flex flex-row items-center justify-between gap-2`}>
      <div className="flex flex-row items-center gap-2">
        <WatchLaterIcon className="!size-4 !fill-white/70" />
        {isChanged ? (
          <input className="!w-[100px]" value={textValue} onChange={(e) => setValue(e.target.value)} />
        ) : (
          <p className="!text-sm text-white/80">{value}</p>
        )}
      </div>
      <div className="flex flex-row gap-2">
        {isChanged ? (
          <>
            <button onClick={() => setChanged(false)}>
              <ClearIcon className="!size-6" />
            </button>
            <button onClick={handleSubmit}>
              <DoneIcon className="!size-6" />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setChanged(true)}>
              <CreateIcon className="!size-4 !fill-green-600/50" />
            </button>
            <button onClick={onRemove}>
              <DeleteIcon className="!size-4 !fill-red-600/50" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
