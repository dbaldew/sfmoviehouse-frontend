import React, {useState} from 'react';
import './Search.css'


function Search(){

    const [search, setSearch] = useState(" ")

    return(
        <div className="search-container">
            <label htmlFor="search">
                Search:
                <input type="text"
                       id="title"
                       name="title"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </div>

    )
}
export default Search