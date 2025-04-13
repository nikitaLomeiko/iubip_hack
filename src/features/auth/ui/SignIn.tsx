import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { authDataStore } from "entities/auth-data";
import { useState } from "react";
import { useNavigate } from "react-router";
import { RoutePath } from "shared/config/route";

export const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    const credentials = btoa(`${login}:${password}`);

    const data = await fetch("https://ыыыы.спб.рф/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
    }).finally(() => {
      setLoading(false);
    });

    if (data.status !== 200) {
      setError("Ошибка авторизации. Неверный логин или пароль");
      return;
    }

    authDataStore.setAuth();
    navigate(RoutePath.home.path);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} className="lg:max-w-[400px] w-full gap-2">
      <Typography className="!text-[24px]" variant="h4">
        Аутентификация
      </Typography>
      <TextField
        error={error !== null}
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        className="w-full !mt-8"
        id="loginField"
        label="Логин"
        variant="outlined"
      />
      <TextField
        error={error !== null}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="w-full !mt-3"
        id="passwordField"
        label="Пароль"
        variant="outlined"
      />
      {error !== null && <p className="!text-red-600">{error}</p>}

      <Button loading={isLoading} onClick={handleSubmit} className="w-full !mt-3" variant="contained">
        Войти
      </Button>
    </Box>
  );
};
