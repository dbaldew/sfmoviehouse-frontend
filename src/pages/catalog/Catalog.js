import React, {useEffect, useState, useContext} from "react";
import './Catalog.css'
import axios from "axios";
import MovieBar from "../../components/movieBar/MovieBar";
import {MovieDataContext} from "../../context/MovieDataContext";

function Catalog() {
    const [movieID, setMovieID] = useState("")
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [description, setDescription] = useState("");
    const [error, toggleError] = useState(false);
    const [listTitle, setListTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [movieData, setMovieData] = useState({});
    const [movies, setMovies] = useState({});
    // const {movieData, setMovieData} = useContext(MovieDataContext);

    useEffect((e) => {

        async function fetchMovies() {
            try {
                const result = await axios.get(`http://localhost:8080/movies`, {
                    headers: {
                        "Content-Type": "application/json",
                        // Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                console.log(result.data);
                setMovieData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchMovies();
    }, []);

    async function searchMovie(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.get(`http://localhost:8080/movies/`, {
                movieID: movieID,
                title: title,
                year: year,
                category: category,
                summary: summary,
                description: description
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            console.log(result.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <form className="movie-search-form" onSubmit={searchMovie}>
                <div className="movie-details">
                    <label htmlFor="title">
                        Title:
                        <input type="text"
                               id="title"
                               name="title"
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <div className="search-button">
                        <button type="submit"
                        >search movie
                        </button>
                    </div>
                    <label htmlFor="year">
                        Filter by year:
                        <input type="text"
                               id="year"
                               name="year"
                               value={year}
                               onChange={(e) => setYear(e.target.value)}
                        />
                    </label>
                    <label htmlFor="category">
                        Filter by category:
                        <input type="text"
                               id="category"
                               name="category"
                               value={category}
                               onChange={(e) => setCategory(e.target.value)}
                        />
                    </label>

                </div>

            </form>

            {Object.keys(movieData).length > 0 &&
                <div className="movie-list">
                    <ul>
                        {movieData.map(movie => {
                            const {movieID, title, year, category} = movie;
                            return (
                                <li key={movieID}>
                                    <MovieBar
                                        movieID={movieID}
                                        title={title}
                                        year={year}
                                        category={category}
                                    />
                                </li>
                            );
                        })};
                    </ul>
                </div>
            }
        </>
    )
}

export default Catalog