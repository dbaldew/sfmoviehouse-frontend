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
import Catalog from "./pages/catalog/Catalog";


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
                    <Route path="/catalog">
                        <Catalog/>
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
