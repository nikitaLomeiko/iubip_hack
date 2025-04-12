import { lazy } from "react";

export const SignInPageLazy = lazy(async () => await import("./Signin.page"));
