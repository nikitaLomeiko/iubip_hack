import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

interface IProps {
    onTab: (key: 'sessions' | 'servers' | 'keys') => void
}

export const TabBar: React.FC<IProps> = (props) => {
    const {onTab} = props
  const [value, setValue] = useState("sessions");

  const handleChange = (event: React.SyntheticEvent, newValue: 'sessions' | 'servers' | 'keys') => {
    setValue(newValue);
    onTab(newValue)
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab className="!text-white" label="Сессии" value='sessions'/>
      <Tab className="!text-white" label="Сервера" value='servers'/>
      <Tab className="!text-white" label="Ключи" value='keys'/>
    </Tabs>
  );
};
