import React, { useState } from "react";

import style from "./Search.module.css"

const Search = (props) => {
    const { onNewCity } = props;
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onNewCity(search);

        // console.log(search);
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="city name" onChange={handleChange} className={style.searchbar}>
                </input>
                <label><button>Search</button></label>
            </form>
        </div>
    )
};

export default Search;
