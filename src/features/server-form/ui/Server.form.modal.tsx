import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { IServerItem, serverStore } from "entities/server-item";

interface IProps extends Partial<IServerItem> {
  open: boolean;
  onClose: () => void;
  isChanged?: boolean;
}

export const ServerFormModal: React.FC<IProps> = (props) => {
  const { onClose, open, isChanged, adress, name, password, id } = props;

  const [isPassword, setShowPassword] = React.useState(false);
  const [nameServer, setNameServer] = React.useState(name || "");
  const [adressServer, setAdressServer] = React.useState(adress || "");
  const [passwordField, setPassword] = React.useState(password || "");
  
  const handleSubmit = () => {
    const idGen = Math.floor(Math.random() * 100000) + 1;

    const data: IServerItem = {
      id: idGen,
      name: nameServer,
      adress: adressServer,
      typeAuth: isPassword ? "password" : "key",
      password: password,
    };

    if (isChanged) {
      serverStore.changeReview({
        id: id || idGen,
        name: data.name,
        adress: data.adress,
        typeAuth: data.typeAuth,
        password: data.password,
      });
      onClose();

      return;
    }

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
            id="name"
            name="name"
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
            id="name"
            name="server"
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
          <div className="mt-8">
            <FormLabel
              id="radio-buttons-group-label"
              sx={{ color: "white" }} // Стилизуем label в белый
            >
              Способ аутентификации
            </FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue="authenticate"
              name="radio-buttons-group"
              sx={{
                "& .MuiFormControlLabel-root": {
                  color: "white", // Белый цвет для каждой метки (label) радио кнопки
                },
                "& .MuiRadio-root": {
                  color: "white", // Белый цвет для радио кнопки
                },
              }}
            >
              <FormControlLabel
                value={false}
                control={<Radio checked={!isPassword} onChange={() => setShowPassword(false)} />}
                label="Аутентификация по ключу"
                sx={{ color: "white" }} // Белый цвет для текста
              />
              <FormControlLabel
                value={true}
                control={<Radio checked={isPassword} onChange={() => setShowPassword(true)} />}
                label="Аутентификация по паролю"
                sx={{ color: "white" }} // Белый цвет для текста
              />
            </RadioGroup>
          </div>
          {isPassword && (
            <TextField
              className="!mt-5"
              type="password"
              fullWidth
              label="Пароль"
              id="password"
              variant="standard"
              value={passwordField}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите адрес"
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
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Отмена</Button>
          <Button onClick={handleSubmit} type="submit">
            {isChanged ? "Изменить" : "Подключиться"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
