import KeyIcon from "@mui/icons-material/Key";
import DeleteIcon from "@mui/icons-material/Delete";
import { observer } from "mobx-react-lite";
import { IKeyItem } from "../model";
import { useState } from "react";
import { KeyViewModel } from "./key.view.model";

interface IProps {
  keyItem: IKeyItem;
  onRemove: () => void;
}

export const KeyItem: React.FC<IProps> = observer((props) => {
  const { onRemove, keyItem } = props;

  const [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(true)} className="flex flex-row items-center justify-between gap-2">
      <div className="flex flex-row items-center gap-2">
        <KeyIcon className="!size-4 !fill-white/70" />
        <p className="!text-sm text-white/80">{keyItem.name}</p>
      </div>
      <button onClick={onRemove}>
        <DeleteIcon className="!size-4 !fill-white/40" />
      </button>
      <KeyViewModel
        keyItem={keyItem}
        onClose={() => setShow(false)}
        open={show}
      />
    </div>
  );
});
