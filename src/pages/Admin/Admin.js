import React, {useState} from "react";
import './Admin.css'
import axios from "axios";

function Admin() {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [description, setDescription] = useState("");
    const [error, toggleError] = useState(false);
    const [listTitle, setListTitle] = useState("")

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
                <div className="movie-form-basic">
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
                </div>
                {/*<div className="movie-form-img">*/}
                {/*    <label htmlFor="img">*/}
                {/*        Select image:*/}
                {/*    </label>*/}
                {/*    <input type="file"*/}
                {/*           id="img"*/}
                {/*           name="img"*/}
                {/*           title=""*/}
                {/*           accept="image/*"*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="movie-form-desc">
                    <label htmlFor="description">
                        Description:
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="20"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                </div>
                <div>
                    <button type="submit"
                    >Update movie list
                    </button>
                </div>
            </form>

            <form className="movie-list">
                <div className="movie-list-title-bar">
                    <div className="movie-list-update">
                        <button type="submit"
                        >Edit movie
                        </button>
                    </div>
                    <div className="movie-list-title">
                        <input type="text"
                               id="movie-list-title"
                               name="movie-list-title"
                               value={listTitle}
                               // onChange={(e) => setlistTitle(e.target.value)}
                        />
                    </div>
                    <div className="movie-list-edit">

                    </div>

                    <div className="movie-list-delete">
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