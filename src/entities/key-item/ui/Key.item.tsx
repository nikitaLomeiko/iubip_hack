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

const KEY_TEST =
  "-----BEGIN OPENSSH PRIVATE KEY-----b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZWQyNTUxOQAAACDX/RqV+djpNNm0IkiFo3Ae8A2/dbk79a+8kBEWiHmakAAAAJggDrEZIA6xGQAAAAtzc2gtZWQyNTUxOQAAACDX/RqV+djpNNm0IkiFo3Ae8A2/dbk79a+8kBEWiHmakAAAAEBAQ3FO4eSE3f9jr8LQhdMnq5+KLFOefhu2AJqMjc8UNNf9GpX52Ok02bQiSIWjcB7wDb91uTv1r7yQERaIeZqQAAAAEHplcm9Adm9pZC10aGlua3kBAgMEBQ==-----END OPENSSH PRIVATE KEY-----";

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
        keyItem={{ id: 1, key: KEY_TEST, name: "Ключ подключения#1", viewKey: KEY_TEST }}
        onClose={() => setShow(false)}
        open={show}
      />
    </div>
  );
});
