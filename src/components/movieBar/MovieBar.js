import React from "react";
import './Moviebar.css'


function MovieBar({title,year, category}){

    return(
        <div className="title-bar">
            <div className="title"
                 id="title"
            ><p>{title}</p>}
            </div>
            <div className="year"
                 id="year"
            ><p>{year}</p>}
            </div>
            <div className="category"
                 id="category"
            ><p>{category}</p>
            </div>
            <div className="update">
                <button type="submit"
                >Edit movie
                </button>
            </div>
            <div className="delete">
                <button type="submit"
                >Delete movie
                </button>
            </div>
        </div>

    );

}
export default MovieBar;