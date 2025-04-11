import { IRoute } from "./types";

enum enumPath {
  home = "home",
}

export const RoutePath: Record<enumPath, IRoute> = {
  [enumPath.home]: {
    path: "/home",
    fullPath: "/home",
  },
};
