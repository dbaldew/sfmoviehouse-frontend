import React, {useState} from "react";
import './Admin.css'
import axios from "axios";

function Admin() {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [description, setDescription] = useState("");
    const [error, toggleError] = useState(false);
    const [listTitle, setListTitle] = useState("");
    const [header, setHeader] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post("http://localhost:8080/movies", {
                title: title,
                year: year,
                category: category,
                description: description
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log(result.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <form className="movie-form" onSubmit={handleSubmit}>

                <div className="movie-info">
                    <label htmlFor="title">
                        Title:
                    <input type="text"
                           id="title"
                           name="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                    </label>
                    <label htmlFor="year">
                        Year:
                    <input type="text"
                           id="year"
                           name="year"
                           value={year}
                           onChange={(e) => setYear(e.target.value)}
                    />
                    </label>
                    <label htmlFor="category">
                        Category:
                    <input type="text"
                           id="category"
                           name="category"
                           value={category}
                           onChange={(e) => setCategory(e.target.value)}
                    />
                    </label>

                </div>

                <div className="movie-img">
                    <label htmlFor="img">
                        Select image:
                    </label>
                    <input type="file"
                           id="img"
                           name="img"
                           title=""
                           accept="image/*"
                    />
                </div>

                <div className="desc-header">
                    <label htmlFor="header">
                        Header:
                        <textarea
                            name="header"
                            id="header"
                            cols="35"
                            rows="10"
                            value={header}
                            onChange={(e) => setHeader(e.target.value)}
                        ></textarea>
                    </label>
                </div>

                <div className="desc-text">
                    <label htmlFor="movie-text">
                        Synopsis:
                        <textarea
                            name="movie-text"
                            id="movie-text"
                            cols="35"
                            rows="10"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                </div>
                <div className="update-button">
                    <button type="submit"
                    >Update movie list
                    </button>
                </div>

            </form>

            <form className="movie-list">
                <div className="title-bar">
                    <div className="update">
                        <button type="submit"
                        >Edit movie
                        </button>
                    </div>
                    <div className="title">
                        <input type="text"
                               id="movie-list-title"
                               name="movie-list-title"
                               value={listTitle}
                            // onChange={(e) => setlistTitle(e.target.value)}
                        />
                    </div>
                    <div className="delete">
                        <button type="submit"
                        >Delete movie
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Admin;