import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){

    return (
        <>
            <nav>
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
            </nav>
        </>
    );
}
export default NavBar;