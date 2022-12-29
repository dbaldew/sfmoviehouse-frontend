import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import './NavBar.css';
import {AuthContext} from "../../context/AuthContext";

function NavBar() {

    const {isAuth} = useContext(AuthContext)

    return (
        <>
            <nav className="nav-container">
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink to="/catalog" exact activeClassName="active-link">Catalog</NavLink>*/}
                        {/*</li>*/}
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