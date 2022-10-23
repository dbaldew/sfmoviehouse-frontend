import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import SignUp from "./pages/SignUp/SignUp";
import TitleBar from "./components/TitleBar/TitleBar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <div className="header">
                        <TitleBar/>
                    </div>
                    <div className="nav">

                    </div>
                    <div className="main">

                    </div>
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
                    <div className="footer">
                        <Footer/>
                    </div>
                </Router>
            </div>

        </>
    );
}

export default App;
