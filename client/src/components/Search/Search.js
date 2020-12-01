import React from 'react';
import "./Search.css"

function Search() {
    return (
        <div className="search">
            <div className="search__input">
                    <input type="search" />
                    <button className="search__button">The News</button>
            </div>
        </div>
    )
}

export default Search
