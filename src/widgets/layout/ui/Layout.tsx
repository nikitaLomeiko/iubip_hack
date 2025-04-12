import { useState } from "react";
import { Box, Drawer, IconButton, Toolbar, AppBar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { SessionsList } from "./components/Sessions.list";
import { ServersList } from "./components/Servers.list";
import Button from "@mui/material/Button";
import TerminalIcon from "@mui/icons-material/Terminal";
import { ServerFormModal } from "features/server-form";
import { SessionFormModal } from "features/session-form";
import KeyIcon from "@mui/icons-material/Key";
import AddLinkIcon from "@mui/icons-material/AddLink";
import DnsIcon from "@mui/icons-material/Dns";

import { TabBar } from "./components/Tabbar";
import { KeysList } from "./components/Keys.list";
import { KeyFormModal } from "features/key-form";
import { observer } from "mobx-react-lite";
import { tabStore } from "../model/mobx/tab.mobx";

const drawerWidth = 290;
const collapsedWidth = 60;

interface IProps {
  children: React.ReactNode;
  title: string;
}

export const Layout: React.FC<IProps> = observer((props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openFormSever, setOpenFormSever] = useState(false);
  const [openFormSession, setOpenFormSession] = useState(false);
  const [openFormKey, setOpenFormKey] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const {state: {tab}} = tabStore


  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: collapsed ? collapsedWidth : drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: collapsed ? collapsedWidth : drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1e1e1e",
            color: "white",
            transition: "width 0.3s",
            zIndex: 1200,
          },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: collapsed ? "center" : "flex-end",
            px: collapsed ? 0 : 2,
          }}
        >
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
              {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
            </IconButton>
          )}
          <div className="w-full flex flex-row items-center gap-2">
            <TerminalIcon className="!size-10" />
            <h1 className="!m-0 !mb-2 w-full">ысысаш</h1>
          </div>
        </Toolbar>
        <TabBar/>
        <div className="p-2 h-full flex flex-col">
          {tab === "sessions" && (
            <>
              <SessionsList />
              <SessionFormModal open={openFormSession} onClose={() => setOpenFormSession(false)} />
            </>
          )}
          {tab === "servers" && (
            <>
              <ServersList />
              <ServerFormModal open={openFormSever} onClose={() => setOpenFormSever(false)} />
            </>
          )}
          {tab === "keys" && (
            <>
              <KeysList />
              <KeyFormModal open={openFormKey} onClose={() => setOpenFormKey(false)} />
            </>
          )}
          <div className="flex flex-col mt-auto gap-4">
            <Button onClick={() => {tabStore.changeTab('sessions'); setOpenFormSession(true)}} className="w-full flex flex-row gap-1" variant="outlined">
              <AddLinkIcon />
              <p>Добавить сессию</p>
            </Button>
            <Button onClick={() => {tabStore.changeTab('servers'); setOpenFormSever(true)}} className="w-full flex flex-row gap-1" variant="outlined">
              <DnsIcon />
              <p>Подключить сервер</p>
            </Button>
            <Button onClick={() => {tabStore.changeTab('keys'); setOpenFormKey(true)}} className="w-full flex flex-row gap-1" variant="outlined">
              <KeyIcon />
              <p>Добавить ключ</p>
            </Button>
          </div>
        </div>
      </Drawer>
      <Box
        className="transition-all w-full"
        component="main"
        sx={{
          flexGrow: 1,
          transition: "0.3s",
        }}
      >
        <AppBar
          className="!bg-[#212121]"
          position="static"
          sx={{
            height: 40,
            transition: "0.3s",
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            )}
            <div className="!justify-center flex items-center h-full w-full">
              <p className="!text-sm !h-fit mb-5 ">{props.title}</p>
            </div>
          </Toolbar>
        </AppBar>

        <Box className='overflow-hidden' style={{ height: "calc(100vh - 40px)" }}>{props.children}</Box>
      </Box>
    </Box>
  );
});
