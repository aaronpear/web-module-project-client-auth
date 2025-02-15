import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
    const history = useHistory();

    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(() => {
                localStorage.removeItem('token');
                history.push('/login');
            });
    }, []);


    return(<></>);
}

export default Logout;