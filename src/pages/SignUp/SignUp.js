import React, {useEffect, useState} from "react";
import './SignUp.css';
import axios from "axios";


function SignUp(){
    const[username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, toggleError] = useState(false);
    const[ loading, toggleLoading] = useState(false);

    const source = axios.CancelToken.source();


    useEffect(()=> {
        return function cleanup(){
            source.cancel();
        }
    }, [])

    async function handleSubmit (e){
        e.preventDefault()
        toggleError(false);
        toggleLoading(true);

        try{
            await axios.post('http://localhost:8080/users/signup', {
                username: username,
                password: password,
                },{
                cancelToken: source.token,
                });

        } catch (e){
            console.error(e);
            toggleError(true)
        }
        toggleLoading(false);
    }

    return(
        <>
            <h1>signup</h1>
            <div className="cred">
                <div className="login">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            username:
                            <input type="username"
                                   id="username"
                                   name="username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>

                        <label htmlFor="password">
                            wachtwoord:
                            <input type="text"
                                   id="password"
                                   name="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        {error && <p className="error">password has to be at least 6 characters</p>}

                        <button type="submit"
                        >Register
                        </button>
                    </form>
                </div>
            </div>

        </>
    )

}
export default SignUp;