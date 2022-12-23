import React from "react";

function MovieCard({img, alt, header,desc} ) {

    return (
        <>
            <div className="home-movie-detail-poster">
                <img src={img} alt={alt}/>
            </div>
            <div className="home-movie-detail-text">
                <div className="home-movie-detail-header">
                    {header}
                </div>
                <div className="home-movie-detail-desc">
                    {desc}
                </div>
                <div className="get-ticket">
                    Get me a ticket!!
                </div>
                <div className="put-on-wishlist">
                    Put this movie on my wishlist
                </div>
            </div>
        </>
    )
}
 export default MovieCard;