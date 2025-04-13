import { IRoute } from "./types";

enum enumPath {
  home = "home",
  server = "server",
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
};
