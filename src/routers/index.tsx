import DefaultLayout from "@/components/Layout/DefaultLayout";
import LayoutRegisterLayout from "@/components/Layout/RegisterLoginLayout";
import ComingSoon from "@/pages/ComingSoon";
import HomePage from "@/pages/Home";
import NewReleases from "@/pages/NewReleases";
import Login from "@/pages/RegisterLogin/Login";
import SignUp from "@/pages/RegisterLogin/SignUp";

interface Routes {
    path: string;
    component: React.ComponentType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layout: any;
}

export const publicRoutes: Routes[] = [
    {
        path: '/login',
        component: Login,
        layout: LayoutRegisterLayout
    },
    {
        path: "/signup",
        component: SignUp,
        layout: LayoutRegisterLayout
    },
    {
        path: "/",
        component: HomePage,
        layout: DefaultLayout
    },
    {
        path: "/home",
        component: HomePage,
        layout: DefaultLayout
    },
    {
        path: "/new-releases",
        component: NewReleases,
        layout: DefaultLayout
    },
    {
        path: "/coming-soon",
        component: ComingSoon,
        layout: DefaultLayout
    },
    
]