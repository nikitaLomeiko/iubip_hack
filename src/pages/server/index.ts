import { lazy } from "react";

export const ServerPageLazy = lazy(async () => await import("./Server.page"));
