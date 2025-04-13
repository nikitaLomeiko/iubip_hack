import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IKeyItem, keyStrore } from "entities/key-item";
import { sessionStore } from "entities/session-item";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const KeyFormModal: React.FC<IProps> = (props) => {
  const { onClose, open } = props;

  const [name, setName] = React.useState("");
  const [key, setKey] = React.useState("");

  const handleSubmit = async () => {
    await fetch("http://ыыыы.спб.рф:8088/keys/", {
      method: "POST",
      body: JSON.stringify({ content: key, name }),
    });

    const keys: IKeyItem[] = await fetch("http://ыыыы.спб.рф:8088/keys/", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => Object.values(data));

    keyStrore.addListKeys(keys);
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog sx={{ "& .MuiPaper-root": { background: "#1e1e1e" } }} open={open} onClose={onClose}>
        <DialogTitle className="text-white">Создание</DialogTitle>
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
            name="name"
            label="Имя ключа"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          multiline
            className="!mt-5"
            type="password"
            fullWidth
            label="Ключ"
            id="password"
            variant="standard"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Введите ключ"
            InputLabelProps={{
              sx: {
                color: "white",
              },
            }}
            InputProps={{
              sx: {
                color: "white",
                "&::placeholder": {
                  color: "white",
                  opacity: 1,
                },
                "&:before": {
                  borderBottom: "1px solid white",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "1px solid white",
                },
                "&:after": {
                  borderBottom: "2px solid white",
                },
              },
            }}
          />
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
};
