import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { IServerItem, serverStore } from "entities/server-item";
import { observer } from "mobx-react-lite";
import { keyStrore } from "entities/key-item";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const ServerFormModal: React.FC<IProps> = observer((props) => {
  const { onClose, open } = props;

  const [nameServer, setNameServer] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [adressServer, setAdressServer] = React.useState("");
  const [key, setKey] = React.useState("");

  const {
    state: { keys },
  } = keyStrore;

  const handleSubmit = async () => {
    const data: IServerItem = {
      name: nameServer,
      addr: adressServer,
      user: username,
      key_file: key,
    };

    const servers: IServerItem[] = await fetch("http://ыыыы.спб.рф:8088/servers/", {
      method: "GET",
    }).then((data) => data.json());

    serverStore.addNewServer(data);
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog sx={{ "& .MuiPaper-root": { background: "#1e1e1e" } }} open={open} onClose={onClose}>
        <DialogTitle className="text-white">Подключение</DialogTitle>
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
            id="username"
            name="username"
            label="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
            placeholder="Введите имя сервера"
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
          <TextField
            autoFocus
            required
            margin="dense"
            id="serverName"
            name="serverName"
            label="Имя сервера"
            value={nameServer}
            onChange={(e) => setNameServer(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
            placeholder="Введите имя сервера"
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
          <TextField
            required
            margin="dense"
            id="serverAdress"
            name="serverAdress"
            label="Адрес сервера"
            value={adressServer}
            onChange={(e) => setAdressServer(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
            placeholder="Введите адрес сервера"
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
          <FormControl className="!mt-5" fullWidth sx={{ color: "white" }}>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
              Ключ
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Ключ"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              {keys.map((item) => (
                <MenuItem value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Отмена</Button>
          <Button onClick={handleSubmit} type="submit">
            Подключиться
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
});
