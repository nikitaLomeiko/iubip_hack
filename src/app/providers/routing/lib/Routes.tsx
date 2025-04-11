import {HomePageLazy} from "pages/home";
import { SignUpPageLazy } from "pages/signup";
import { RouteProps } from "react-router";
import { RoutePath } from "shared/config/route";

export const Routes: RouteProps[] = [
    {
        path: RoutePath.home.fullPath,
        element: <HomePageLazy/>
    },
    {
        path: RoutePath.signup.fullPath,
        element: <SignUpPageLazy/>
    }
]