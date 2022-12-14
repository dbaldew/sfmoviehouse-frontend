import React, {useContext} from "react";
import './Profile.css'


import {AuthContext} from "../../context/AuthContext";

function Profile() {
    const {isAuth, user} = useContext(AuthContext);


    return (
        <>
            <div className="avatar">
                avatar
                {/*<div className="welcome">*/}
                {/*    <p> Hello {user.username} </p>*/}
                {/*</div>*/}
            </div>

            <div className="userinfo">
                userinfo
            </div>

            <div className="list">
                <div className="tickets">
                    tickets
                </div>
                <div className="wishlist">
                    wishlist
                </div>
            </div>

            <div className="profile-movie-info">
                <div className="profile-poster">
                    poster
                </div>
                <div className="profile-text">
                    text
                </div>
            </div>
            {/*<SignUp/>*/}
        </>
    )
}

export default Profile;