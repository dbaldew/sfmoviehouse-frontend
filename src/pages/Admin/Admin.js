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
            <p>admin</p>

            <form className="movie-form" onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Title:
                </label>
                <input type="text"
                       id="title"
                       name="title"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="year">
                    Year:
                </label>
                <input type="text"
                       id="year"
                       name="year"
                       value={year}
                       onChange={(e) => setYear(e.target.value)}
                />
                <label htmlFor="category">
                    Category:
                </label>
                <input type="text"
                       id="category"
                       name="category"
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit"
                >Create movie
                </button>
            </form>
        </>
    )
}

export default Admin;