import { IRoute } from "./types";

enum enumPath {
  home = "home",
  signup = "signup",
}

export const RoutePath: Record<enumPath, IRoute> = {
  [enumPath.home]: {
    path: "/home",
    fullPath: "/home",
  },
  [enumPath.signup]: {
    path: "/sign/up",
    fullPath: "/sign/up",
  },
};
