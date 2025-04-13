import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { sessionStore } from "entities/session-item";
import { serverStore } from "entities/server-item";
import { observer } from "mobx-react-lite";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const SessionFormModal: React.FC<IProps> = observer((props) => {
  const { onClose, open } = props;

  const [name, setName] = React.useState("");
  const {
    state: { servers },
  } = serverStore;

  const [serverId, setServerId] = React.useState('');

  const handleSubmit = async () => {
    if (name.trim().length > 5) {
      const sess = {
        cmd: "",
        sid: name,
        x: 50,
        y: 50,
      };

      fetch(`http://ыыыы.спб.рф:8088/servers/${serverId}/sessions/`, {
        method: "POST",
        body: JSON.stringify(sess),
      });

      sessionStore.addNewSession({ name, history: [], serverId: "0" });
      onClose();
    }
  };

  return (
    <React.Fragment>
      <Dialog sx={{ "& .MuiPaper-root": { background: "#1e1e1e" } }} open={open} onClose={onClose}>
        <DialogTitle className="text-white">Сессия</DialogTitle>
        <DialogContent>
          <DialogContentText className="!text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium iusto dolore laudantium aliquam.
            Ullam cumque eligendi itaque modi nesciunt suscipit eius obcaecati. Odit adipisci, ullam ipsam ab reiciendis
            amet.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="server"
            label="Название сессии"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
            placeholder="Введите название сессии"
            sx={{
              "& .MuiInput-underline:before": {
                borderBottom: "1px solid white", // белое подчеркивание до фокуса
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "1px solid white", // белое подчеркивание при наведении
              },
              "& .MuiInput-underline:after": {
                borderBottom: "2px solid white", // белое подчеркивание при фокусе
              },
              "& .MuiInputBase-input": {
                color: "white", // цвет текста
              },
              "& .MuiInputLabel-root": {
                color: "white", // цвет текста лейбла
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // цвет лейбла при фокусе
              },
            }}
          />
          <FormControl className="!mt-10" fullWidth sx={{ color: "white" }}>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
              Сервер
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Сервер"
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#1e1e1e",
                    color: "white",
                  },
                },
              }}
            >
              {servers.map((item) => (
                <MenuItem value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Отмена</Button>
          <Button onClick={handleSubmit} type="submit">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
});
