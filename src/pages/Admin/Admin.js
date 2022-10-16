import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import './Admin.css'


function Admin() {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(" ");
    const [category, setCategory] = useState(" ");

    function handleSubmit() {

    }

    return (
        <>

            <div className="admin-container">
                <p>admin</p>
                <p><Link to="/">Back to homepage</Link></p>

                <div className="movie-form">
                    <form className="movie-form" onSubmit={handleSubmit}>
                        <label htmlFor="title">
                            Enter movie title:
                            <input type="text"
                                   id="title"
                                   name="title"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <label htmlFor="year">
                            Enter movie year:
                            <input type="text"
                                   id="year"
                                   name="year"
                                   value={year}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <label htmlFor="category">
                            Enter movie category:
                            <input type="text"
                                   id="category"
                                   name="category"
                                   value={category}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <button type="submit"
                        >create movie
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin;