import {HomePageLazy} from "pages/home";
import { ServerPageLazy } from "pages/server";
import { SignInPageLazy } from "pages/signin";
import { RouteProps } from "react-router";
import { RoutePath } from "shared/config/route";
import { PrivateRoute } from "../ui/PrivateRoute";

export const Routes: RouteProps[] = [
    {
        path: '/',
        element: <PrivateRoute><HomePageLazy/></PrivateRoute>
    },
    {
        path: RoutePath.home.fullPath,
        element: <PrivateRoute><HomePageLazy/></PrivateRoute>
    },
    {
        path: RoutePath.server.fullPath,
        element: <PrivateRoute><ServerPageLazy/></PrivateRoute>
    },
    {
        path: RoutePath.signin.fullPath,
        element: <SignInPageLazy/>
    }
]