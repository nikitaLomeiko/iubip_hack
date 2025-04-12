import {HomePageLazy} from "pages/home";
import { ServerPageLazy } from "pages/server";
import { SignUpPageLazy } from "pages/signup";
import { RouteProps } from "react-router";
import { RoutePath } from "shared/config/route";

export const Routes: RouteProps[] = [
    {
        path: '/',
        element: <HomePageLazy/>
    },
    {
        path: RoutePath.home.fullPath,
        element: <HomePageLazy/>
    },
    {
        path: RoutePath.server.fullPath,
        element: <ServerPageLazy/>
    },
    {
        path: RoutePath.signup.fullPath,
        element: <SignUpPageLazy/>
    }
]