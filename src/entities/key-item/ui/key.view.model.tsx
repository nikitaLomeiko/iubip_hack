import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IKeyItem } from "../model";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IProps {
  open: boolean;
  onClose: () => void;
  keyItem: IKeyItem;
}

export const KeyViewModel: React.FC<IProps> = (props) => {
  const { onClose, open, keyItem } = props;

  const [isBlur, setBlur] = React.useState(false);

  return (
    <React.Fragment>
      <Dialog sx={{ "& .MuiPaper-root": { background: "#1e1e1e" } }} open={open} onClose={onClose}>
        <DialogTitle className="text-white">{keyItem.name}</DialogTitle>
        <DialogContent>
          <DialogContentText className="!text-white">
            <div>
              <div className="rounded-t-lg border-gray-400 border-1 px-2 py-2 bg-gray-400/10">key</div>
              <div className="border-gray-400 border-1 px-2 py-4">
                <div className={`break-words text-white/90 text-[12px] transition-all ${isBlur && 'blur-sm opacity-55'}`}>{keyItem.key}</div>
              </div>
              <div className="rounded-b-lg border-gray-400 border-1 px-2 py-2 flex flex-row gap-3">
                <button onClick={() => setBlur(!isBlur)}>
                  {isBlur ? <RemoveRedEyeIcon className="!size-4" /> : <VisibilityOffIcon className="!size-4" />}
                </button>
                <button>
                  <ContentCopyIcon className="!size-4" />
                </button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>ОК</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
