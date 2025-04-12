import {HomePageLazy} from "pages/home";
import { ServerPageLazy } from "pages/server";
import { SignInPageLazy } from "pages/signin";
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
        path: RoutePath.signin.fullPath,
        element: <SignInPageLazy/>
    }
]