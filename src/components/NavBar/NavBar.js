import React, {useContext} from "react";
import {NavLink, Link} from "react-router-dom";
import './NavBar.css';
import {AuthContext} from "../../context/AuthContext";
import Login from "../Auth/Login/Login";

function NavBar(){

    const {isAuth} = useContext(AuthContext)

    return (
        <>
            <nav className="nav-container">
                <div>
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
                <div>
                    <h1>SfMovieHouse</h1>
                </div>
                <div>
                    <Login/>
                </div>
            </nav>
        </>
    );
}
export default NavBar;