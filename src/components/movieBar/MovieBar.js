import React from "react";
import './Moviebar.css'


function MovieBar(props){

    const{movieID, title, year, category, deleteMovie, editMovie} = props;

    return(


        <div className="movie-bar">
            <div className="movieID"
                 id="movieID"
            ><p>{movieID}</p>
            </div>
            <div className="title"
                 id="title"
            ><p>{title}</p>
            </div>
            <div className="year"
                 id="year"
            ><p>{year}</p>
            </div>
            <div className="category"
                 id="category"
            ><p>{category}</p>
            </div>
            <div className="update">
                <button type="submit"
                        onClick={editMovie}
                >Edit movie
                </button>
            </div>
            <div className="delete">
                <button type="submit"
                        onClick={deleteMovie}
                >Delete movie
                </button>
            </div>
        </div>

    );

}
export default MovieBar;