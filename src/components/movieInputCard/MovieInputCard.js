import React from "react";
import './MovieInputCard.css'

function MovieCard({img,alt, title, summary, category, year, description,updateMovie}) {

    return (
        <>
            <div className="movie-input-card-container">
                <form onSubmit={updateMovie}>
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

                    </div>
                </form>

            </div>

        </>
    )
}

export default MovieCard;