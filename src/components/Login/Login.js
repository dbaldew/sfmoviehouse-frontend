import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import "./Login.css"

function Login(){

    const {login} = useContext(AuthContext)

    function handleSubmit(e){
        e.preventDefault();
        login();
    }

    return(
        <>
            <div className="login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">email:
                        <input type="text" id="username"/>
                    </label>
                    <label htmlFor="password">wachtwoord:
                        <input type="text" id="password"/>
                    </label>
                    <button type="submit"
                    >Inloggen</button>
                </form>
                <p>No account?</p>
                <p>Signup <Link to="/signup">here! </Link></p>
            </div>

        </>
    )

}
export default Login;