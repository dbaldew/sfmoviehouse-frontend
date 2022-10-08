import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import Login from "./components/Login/Login";

function App() {
  return (
      <>
        <div className="App">
          <Router>
            <NavBar/>

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
          </Router>
        </div>
      </>
  );
}

export default App;
