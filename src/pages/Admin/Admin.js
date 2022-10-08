import React from "react";
import { Link } from 'react-router-dom';
import './Admin.css'


function Admin(){
    return(
        <>
            <div>
                <p>admin</p>
                <p><Link to="/">Back to homepage</Link></p>
            </div>
        </>
    )
}
export default Admin;