import React from "react";
import './Titlecard.css'


function TitleCard ({title, setMovieQuery, movieID}){

    return(
        <>
            <div className="home-list-title-item-box">
                <label htmlFor="title-btn">
                    <button
                        className="home-list-title-button"
                        type="button"
                        name="title-btn"
                        id="title-btn"
                        value = {movieID}
                        onClick={(e) => setMovieQuery(e.target.value)}
                    >{title}
                    </button>
                </label>

            </div>
        </>
    )
}
export default TitleCard;