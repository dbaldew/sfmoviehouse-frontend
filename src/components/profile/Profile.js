import React, {useContext} from "react";
import './Profile.css'
import SignUp from "../../pages/signUp/SignUp";

import {AuthContext} from "../../context/AuthContext";

function Profile(){
    const {isAuth, user} = useContext(AuthContext);

    function getUsername(){
        return user.username;
    }

    return(
        <>
            {!isAuth?
                <SignUp/>
                :
                <div>
                    <div className="avatar">
                        avatar
                    </div>
                    <div className="welcome">
                        <p>Hello {getUsername()} </p>
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
                </div>
            }
        </>
    )
}

export default Profile;