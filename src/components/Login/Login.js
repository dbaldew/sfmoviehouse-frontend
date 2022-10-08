import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import "./Login.css"

function Login(){

    const {login, logout, isAuth} = useContext(AuthContext)

    function userLogin(e){
        e.preventDefault();
        login();
    }
    function userLogout(e){
        e.preventDefault();
        logout()
    }

    return(
        <>
            <div className="cred">
            {isAuth ?
                <div className="logout">
                    <button
                        type="submit"
                        onClick={userLogout}
                    >Logout
                    </button>
                </div>
                :
                <div className="login">
                    <form className="login-form" onSubmit={userLogin}>
                        <label htmlFor="username">email:
                            <input type="text" id="username"/>
                        </label>
                        <label htmlFor="password">wachtwoord:
                            <input type="text" id="password"/>
                        </label>
                        <button type="submit"
                        >Inloggen
                        </button>
                    </form>
                    <p>No account?</p>
                    <p className="signup-link"><Link to="/signup">Sign Up!</Link></p>
                </div>
            }
            </div>
        </>
    )

}
export default Login;