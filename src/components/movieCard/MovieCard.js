import React from "react";

function MovieCard({img,alt, title, summary, category, year, description}) {

    return (
        <>
            <div className="home-movie-detail-poster">
                <img src={img} alt={alt}/>
            </div>
            <div className="home-movie-detail-text">
                <div className="home-movie-detail-title">
                    {title}
                </div>
                <div className="home-movie-detail-summary">
                    {summary}
                </div>
                <div className="home-movie-detail-category">
                    {category}
                </div>
                <div className="home-movie-detail-year">
                    {year}
                </div>

                <div className="home-movie-detail-description">
                    {description}
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