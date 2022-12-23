import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import TitleBar from "./components/TitleBar/TitleBar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Auth/SignIn/SignIn";


function App() {

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
                        <Home/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/admin">
                        <Admin/>
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
