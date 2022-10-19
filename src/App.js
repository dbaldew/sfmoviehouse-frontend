import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import SignUp from "./pages/SignUp/SignUp";
import TitleBar from "./components/TitleBar/TitleBar";

function App() {
  return (
      <>
          <div className="App">
            <Router>
              <TitleBar/>
              <NavBar/>
              <div className="flex-container">
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
                <Route path="/signup">
                  <SignUp/>
                </Route>
              </Switch>
              </div>
            </Router>
        </div>

      </>
  );
}

export default App;
