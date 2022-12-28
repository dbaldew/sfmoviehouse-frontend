import React, {useEffect, useState} from "react";
import './Admin.css'
import axios from "axios";

function Admin() {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [description, setDescription] = useState("");
    const [error, toggleError] = useState(false);
    const [listTitle, setListTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [movieData, setMovieData] = useState({});


    useEffect((e)=>{

        async function fetchMovies(){
            try{
                const result = await axios.get( "http://localhost:8080/movies", {
                    headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }});
                console.log(result.data);
                setMovieData(result.data);
            } catch (e){
                console.error(e);
            }
        }
        fetchMovies();
    },[]);

    async function updateMovie(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post("http://localhost:8080/movies", {
                title: title,
                year: year,
                category: category,
                summary:summary,
                description: description
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
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
                            rows="10"
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
                            rows="25"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                </div>

                <div className="update-button">
                    <button type="submit"
                    >Update movie list
                    </button>
                </div>
            </form>
        </>
    )
}

export default Admin;