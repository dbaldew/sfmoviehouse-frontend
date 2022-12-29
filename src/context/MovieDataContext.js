import {createContext, useState, useEffect} from "react";
import React from 'react';
import axios from "axios";


export const MovieDataContext = createContext({});

function MovieDataContextProvider({children}){

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

    const contextData = {
        movieData: movieData,
        setMovieData: setMovieData,
    };

    return (
        <MovieDataContext.Provider value={contextData}>
            {children}
        </MovieDataContext.Provider>
    );
}

export default MovieDataContextProvider;