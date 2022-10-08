import React from "react";
import { Link } from 'react-router-dom';


function Profile(){

    return(
        <>
            <div>
                <p>profile</p>
                <p><Link to="/">Back to homepage</Link></p>
            </div>
        </>
    )
}

export default Profile;