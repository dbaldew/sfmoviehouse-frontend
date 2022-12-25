import React, {createContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import  jwt_decode from 'jwt-decode'
import axios from "axios";
import isTokenValid from '../helpers/isTokenValid'

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(()=>{
        const token =localStorage.getItem('token');

        if(token && isTokenValid(token)){
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status:'done',
            });
        }
    }, []);

    function login(JWT) {

        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);

        fetchUserData(decoded.sub, JWT, "/profile")
        console.log("user has logged in");
        // history.push("/profile")

    }

    function logout() {
       localStorage.clear();
       toggleIsAuth({
           isAuth: false,
           user: null,
           status:'done',
       });

        console.log("user has logged out");
        history.push("/")
    }

    async function fetchUserData(username, token, redirectUrl) {

        try {
            const result = await axios.get(`http://localhost:8080/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    password: result.data.password,
                },
                status: 'done',
            });

            if (redirectUrl) {
                history.push(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }

    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login:login,
        logout:logout,

    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status ==='done'? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;