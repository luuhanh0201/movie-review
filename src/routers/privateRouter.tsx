/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: any }) => {
    const dataStorage = sessionStorage.getItem('user') as string
    let dataUser;
    if (dataStorage) {
        dataUser = JSON.parse(dataStorage);
    }
    console.log(dataUser);

    if (!dataUser || (dataUser.role !== 'admin' && dataUser.role !== "manager")) {
        return <Navigate to={"/"} />

    }

    if (dataUser && (dataUser.role === 'admin' || dataUser.role === 'manager')) {
        // return { children }
        return <>{children}</>

    }

};