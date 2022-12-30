import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Admin from "./pages/admin/Admin";
import TitleBar from "./components/titleBar/TitleBar";
import Footer from "./components/footer/Footer";
import SignIn from "./components/Auth/SignIn/SignIn";
import {useEffect, useState} from 'react';
import axios from "axios";


function App() {

    const [movieData, setMovieData] = useState({})

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


    return (
        <div className="App">

            <div className="header">
                <TitleBar/>
            </div>
            <div className="nav">
                <NavBar/>
                <SignIn/>
            </div>

            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Home
                            movieData = {movieData}
                        />
                    </Route>
                    {/*<Route path="/catalog">*/}
                    {/*    <Catalog*/}
                    {/*        movieData = {movieData}*/}

                    {/*    />*/}
                    {/*</Route>*/}
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/admin">
                        <Admin
                        setMovieData={setMovieData}
                        movieData = {movieData}
                        />
                    </Route>
                </Switch>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
