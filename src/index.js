import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from "./context/AuthContext";
import MovieDataContextProvider from "./context/MovieDataContext";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <MovieDataContextProvider>
                    <App/>
                </MovieDataContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
