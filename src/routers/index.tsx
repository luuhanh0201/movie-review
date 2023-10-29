/* eslint-disable @typescript-eslint/no-explicit-any */
// import Dashboard from "@/admin/pages/Darkbroad";
import ManagementLayout from "@/components/Layout/ManagementLayout";
import LayoutRegisterLayout from "@/components/Layout/RegisterLoginLayout";
import ManageComments from "@/pages/admin/Comments";
import DashBoard from "@/pages/admin/DashBoard";
import Film from "@/pages/admin/Films";
import AddNewFilm from "@/pages/admin/Films/addNewFilm";
import ManageUsers from "@/pages/admin/Users";
import DetailAccount from "@/pages/admin/Users/detailUser";
import ComingSoon from "@/pages/clients/ComingSoon";
import HomePage from "@/pages/clients/Home";
import NewReleases from "@/pages/clients/NewReleases";
import Profile from "@/pages/clients/Profile";
import Login from "@/pages/clients/RegisterLogin/Login";
import SignUp from "@/pages/clients/RegisterLogin/SignUp";

interface Routes {
    path: string;
    component: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layout?: any;
}

const publicRoutes: Routes[] = [
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
    {
        path: "/profile/:id",
        component: Profile,
        layout: DefaultLayout
    }


]

const privateRouter: Routes[] = [
    {
        path: "/admin/",
        component: DashBoard,
    },
    {
        path: "/admin/manage-film",
        component: Film,
    },
    {
        path: "/admin/add-new-film",
        component: AddNewFilm,
    },
    {
        path: "/admin/manage-users",
        component: ManageUsers,
    },
    {
        path: "/admin/manage-comments",
        component: ManageComments,
    },
    {
        path: "/admin/manage-user/:id",
        component: DetailAccount,
    }
]

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRouter";
// import { PrivateRoute } from "./privateRouter";
type LayoutType = any

function AppRoutes() {


    return (
        <>
            <Routes>
                {
                    publicRoutes.map((route, index) => {
                        let Layout: LayoutType = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }
                        const Page = route.component
                        return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
                    })
                }
                {
                    privateRouter.map((route, index) => {
                        const Page = route.component
                        return (
                            <Route key={index} path={route.path} element={<PrivateRoute><ManagementLayout>{<Page />}</ManagementLayout></PrivateRoute>} />
                        )
                    })
                }
                <Route path="*" element={<div>ERROR</div>}></Route>
            </Routes>

        </>
    );
}

export default AppRoutes;