import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const SignIn = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} className='max-w-[400px] w-full gap-2'>
      <Typography className="!text-[24px]" variant="h4">
        Аутентификация
      </Typography>
      <TextField className='w-full' id="loginField" label="Логин" variant="outlined" />
      <TextField className='w-full' id="passwordField" label="Пароль" variant="outlined" />
      <Button className='w-full' variant="contained">Войти</Button>
    </Box>
  );
};
