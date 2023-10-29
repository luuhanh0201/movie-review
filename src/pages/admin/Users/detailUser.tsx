/* eslint-disable react-hooks/exhaustive-deps */
import { URL_DB_ACCOUNT } from "@/assets/images/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailAccount() {
    const { id } = useParams()
    const [user, setUser] = useState({ username: "" })
    const { username }: { username: string } = user
    console.log(id);
    useEffect(() => {
        axios.get(`${URL_DB_ACCOUNT}/${id}`)
            .then(response => setUser(response.data.data))
    }, [])
    return (
        <div className="flex">
            <div className="mb-8">
                <h1 className="uppercase text-xs text-green-500 pb-4">Manage user</h1>
                <p className="text-lg text-gray-700 font-semibold">{username}</p>
            </div>
        </div>
    );
}

export default DetailAccount;