import { useState } from "react";
import { Box, Drawer, IconButton, Toolbar, AppBar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { SessionsList } from "./components/Sessions.list";
import { ServersList } from "./components/Servers.list";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TerminalIcon from "@mui/icons-material/Terminal";
import { ServerFormModal } from "features/server-form";
import { SessionFormModal } from "features/session-form";

const drawerWidth = 240;
const collapsedWidth = 60;

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openFormSever, setOpenFormSever] = useState(false);
  const [openFormSession, setOpenFormSession] = useState(false);


  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

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
        <div className="p-2">
          <Divider className="after:bg-white/30 before:bg-white/30">Сессии</Divider>
          <div className="mt-8">
            <SessionsList />
            <Button onClick={() => setOpenFormSession(true)} className="w-full !mt-8" variant="outlined">
              Добавить сессию
            </Button>
            <SessionFormModal open={openFormSession} onClose={() => setOpenFormSession(false)} />
          </div>
          <Divider className="after:bg-white/30 before:bg-white/30 !mt-10">Сервера</Divider>
          <div className="mt-8">
            <ServersList />
            <Button onClick={() => setOpenFormSever(true)} className="w-full !mt-8" variant="outlined">
              Подключить сервер
            </Button>
            <ServerFormModal open={openFormSever} onClose={() => setOpenFormSever(false)} />
          </div>
        </div>
      </Drawer>
      <Box
        className="transition-all"
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
            <div className="!justify-center flex items-center h-full">
              <p className="!text-sm !h-fit mb-5">Terminal</p>
            </div>
          </Toolbar>
        </AppBar>

        <Box style={{ height: "calc(100vh - 40px)" }}>{props.children}</Box>
      </Box>
    </Box>
  );
};
