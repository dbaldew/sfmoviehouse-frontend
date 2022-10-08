import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import Login from "../Login/Login";
import './NavBar.css';
import {AuthContext} from "../../context/AuthContext";

function NavBar(){

    const {isAuth} = useContext(AuthContext)

    return (
        <>
            <nav className="nav-container">
                <div className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>
                        <li>
                            {isAuth ? <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>: <NavLink to="/" />}

                        </li>
                        <li>
                            {isAuth?<NavLink to="/admin" activeClassName="active-link">Admin</NavLink>: <NavLink to="/"/>}
                        </li>
                    </ul>

                </div>
                <div className="cred">
                    <Login/>
                </div>
            </nav>
        </>
    );
}
export default NavBar;