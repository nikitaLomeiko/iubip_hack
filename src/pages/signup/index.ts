import { lazy } from "react";

export const SignUpPageLazy = lazy(async () => await import("./SignUp.page"));
