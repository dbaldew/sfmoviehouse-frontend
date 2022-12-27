import React, {useEffect, useState} from "react";
import './Home.css'
import MovieCard from "../../components/movieCard/MovieCard";
import TitleCard from "../../components/titlecard/TitleCard";

import axios from "axios";

function Home() {

    const [movieData, setMovieData] = useState({})
    const [card, setCard] = useState("1")
    const [movieQuery, setMovieQuery] = useState("1")

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

    useEffect((e) => {

        async function fetchMovie() {
            try {
                const result = await axios.get(`http://localhost:8080/movies/id/${movieQuery}`, {
                    headers: {
                        "Content-Type": "application/json",
                        // Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                console.log(result.data);
                setCard(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchMovie();
    }, [movieQuery]);

    return (
        <>
            <div className="home-list-title-container">
                {Object.keys(movieData).length > 0 &&
                    <ul>
                        {movieData.map(movie=>{
                            const {movieID, title}=movie;
                            return(
                                <li key={movieID}>
                                    <TitleCard
                                        title={title}
                                        movieID={movieID}
                                       setMovieQuery = {setMovieQuery}
                                    />
                                </li>
                            );
                        })};
                    </ul>
                }
            </div>

            <div className="home-movie-detail-container">
                <MovieCard
                    img="img"
                    alt="poster"
                    title = {card.title}
                    summary={card.summary}
                    category={card.category}
                    year={card.year}
                    description={card.description}
                    setCard={setCard}
                />
            </div>
        </>
    )

}

export default Home;