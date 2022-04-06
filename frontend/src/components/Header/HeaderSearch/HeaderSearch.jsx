import React from 'react';

const SearchBar = () => {
    return (
        <div className="header__search">
        <button className="header__search_butt">
            <i className="fi fi-rr-search"></i>
        </button>
        <input className="header__search_input" type="text" placeholder="Search Forums..." />
        </div>
    )
}

export default SearchBar
