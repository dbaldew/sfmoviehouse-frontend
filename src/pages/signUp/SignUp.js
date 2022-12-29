import React, {useEffect, useState} from "react";
import './SignUp.css';
import axios from "axios";
import Profile from "../profile/Profile";


function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    const source = axios.CancelToken.source();


    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8080/users/signup', {
                username: username,
                password: password,
            }, {
                cancelToken: source.token,
            });
            setIsRegistered(true);

        } catch (e) {
            console.error(e);
            toggleError(true)
            setIsRegistered(false);
        }
        toggleLoading(false);
    }

    return (
        <>
            <p>No account?</p>
            <p>Register now!</p>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <input type="username"
                           id="username"
                           name="username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Password:
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
            {isRegistered?
                <p>Woohoo! Registration successful! You can now login to view your profile</p>
            :
                <p></p>
            }
        </>
    )
}

export default SignUp;