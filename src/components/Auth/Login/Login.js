import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from "../../../context/AuthContext";
import "./Login.css"
import axios from "axios";
import Logout from "../Logout/Logout";

function Login() {

    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);
    const {isAuth} = useContext(AuthContext)

    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        toggleError(false);

        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password,
            }, {
                cancelToken: source.token,
            });
            console.log(result.data);

            login(result.data.jwt);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <div className="login-container">
                {isAuth?
                    <Logout/>
                    :
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            username:
                            <input type="text"
                                   id="username"
                                   name="username"
                                   value={username}
                                   onChange={(e) => SetUsername(e.target.value)}
                            />
                        </label>

                        <label htmlFor="password">
                            wachtwoord:
                            <input type="text"
                                   id="password"
                                   name="password"
                                   value={password}
                                   onChange={(e) => SetPassword(e.target.value)}
                            />
                        </label>
                        {error && <p className="error">Combination of username and password is incorrect</p>}

                        <button type="submit"
                        >Inloggen
                        </button>
                        <div>
                            <p>No Account? Register <NavLink to="/signup" activeClassName="active-link">here!</NavLink></p>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default Login;