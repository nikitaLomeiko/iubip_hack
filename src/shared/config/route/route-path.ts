import { IRoute } from "./types";

enum enumPath {
  home = "home",
  server = "server",
  signin = "signin",
}

export const RoutePath: Record<enumPath, IRoute> = {
  [enumPath.home]: {
    path: "/home",
    fullPath: "/home/:session?",
  },
  [enumPath.server]: {
    path: "/server",
    fullPath: "/server/:serverId",
  },
  [enumPath.signin]: {
    path: "/sign/in",
    fullPath: "/sign/in",
  },
};
