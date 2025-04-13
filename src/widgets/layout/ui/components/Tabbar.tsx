import { Tab, Tabs } from "@mui/material";
import { tabStore } from "widgets/layout/model/mobx/tab.mobx";


export const TabBar: React.FC = () => {
    const {state: {tab}} = tabStore

  const handleChange = (event: React.SyntheticEvent, newValue: 'sessions' | 'servers' | 'keys') => {
    console.log(event)
    tabStore.changeTab(newValue)
  };

  return (
    <Tabs value={tab} onChange={handleChange} aria-label="icon tabs example">
      <Tab className="!text-white" label="Сессии" value='sessions'/>
      <Tab className="!text-white" label="Сервера" value='servers'/>
      <Tab className="!text-white" label="Ключи" value='keys'/>
    </Tabs>
  );
};
