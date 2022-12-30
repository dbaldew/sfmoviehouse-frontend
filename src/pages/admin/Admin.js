import React, {useState, useEffect} from "react";
import './Admin.css'
import axios from "axios";
import MovieBar from "../../components/movieBar/MovieBar";


function Admin({movieData, setMovieData}) {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");

    const [error, toggleError] = useState(false);
    const [listTitle, setListTitle] = useState("");

    const [refresh, setRefresh] = useState(false)
    const [keyWord, setKeyword] = useState("")


    async function updateMovie(e) {
        e.preventDefault();
        toggleError(false);
        setRefresh(false);

        try {
            const result = await axios.post("http://localhost:8080/movies", {
                title: title,
                year: year,
                category: category,
                summary: summary,
                description: description
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log(result.data)
            setMovieData(result.data)
            setRefresh(true)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    useEffect((e) => {

        async function fetchMovies() {
            try {
                const result = await axios.get("http://localhost:8080/movies", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                console.log(result.data);
                setMovieData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchMovies();
    }, [refresh]);

    function editMovie(){
        console.log("edit function")
    }

    function deleteMovie() {
        console.log("delete function");
    }

    function filter(){

    }



    return (
        <>

            <form className="movie-form" onSubmit={updateMovie}>
                <div className="movie-info">
                    <label htmlFor="title">
                        Title:
                        <input type="text"
                               id="title"
                               name="title"
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label htmlFor="year">
                        Year:
                        <input type="text"
                               id="year"
                               name="year"
                               value={year}
                               onChange={(e) => setYear(e.target.value)}
                        />
                    </label>
                    <label htmlFor="category">
                        Category:
                        <input type="text"
                               id="category"
                               name="category"
                               value={category}
                               onChange={(e) => setCategory(e.target.value)}
                        />
                    </label>
                </div>

                {/*<div className="movie-img">*/}
                {/*    <label htmlFor="img">*/}
                {/*        Select image:*/}
                {/*    </label>*/}
                {/*    <input type="file"*/}
                {/*           id="img"*/}
                {/*           name="img"*/}
                {/*           title=""*/}
                {/*           accept="image/*"*/}
                {/*    />*/}
                {/*</div>*/}

                <div className="desc-summary">
                    <label htmlFor="summary">
                        Summary
                        <textarea
                            name="summary"
                            id="summary"
                            cols="35"
                            rows="5"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        ></textarea>
                    </label>
                </div>

                <div className="desc-description">
                    <label htmlFor="description">
                        Synopsis:
                        <textarea
                            name="description"
                            id="description"
                            cols="35"
                            rows="5"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                </div>

                <div className="update-button">
                    <button type="submit"
                    >Add movie
                    </button>
                </div>




            </form>


            <div>

                {Object.keys(movieData).length > 0 &&
                    <div className="movie-list">
                        <div className="filter">
                            <label htmlFor="filter">
                                Keyword filter:
                                <input className="filter-input" type="search"/>
                            </label>
                        </div>
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
                                            deleteMovie = {deleteMovie}
                                            editMovie ={editMovie}
                                        />
                                    </li>
                                );
                            })};
                        </ul>
                    </div>
                }
            </div>


        </>
    )
}

export default Admin;