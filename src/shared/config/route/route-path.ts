import { IRoute } from "./types";

enum enumPath {
  home = "home",
  server = "server",
  signup = "signup",
}

export const RoutePath: Record<enumPath, IRoute> = {
  [enumPath.home]: {
    path: "/home",
    fullPath: "/home/:session?",
  },
  [enumPath.signup]: {
    path: "/sign/up",
    fullPath: "/sign/up",
  },
  [enumPath.server]: {
    path: "/server",
    fullPath: "/server/:serverId",
  },
};
