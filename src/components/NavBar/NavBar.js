import React from "react";
import {NavLink} from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import './NavBar.css';

function NavBar(){

    return (
        <>
            <nav className="nav-container">
                <div className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName="active-link">Admin</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="login">
                    <div>
                        <Login>

                        </Login>
                    </div>
                    <div className="signup">
                        <SignUp>

                        </SignUp>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavBar;