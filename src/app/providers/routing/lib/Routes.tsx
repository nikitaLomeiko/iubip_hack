import {HomePageLazy} from "pages/home";
import { RouteProps } from "react-router";
import { RoutePath } from "shared/config/route";

export const Routes: RouteProps[] = [
    {
        path: RoutePath.home.fullPath,
        element: <HomePageLazy/>
    }
]