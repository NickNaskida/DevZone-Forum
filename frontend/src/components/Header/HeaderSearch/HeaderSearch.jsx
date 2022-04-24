import React, { useState } from 'react';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const toggleSearch = () => {
    setIsFocused(!isFocused)
  }

  return (
    <div
      className="header__search"
      style={{width: isFocused ? "420px" : "320px"}}
    >
      <button className="header__search_butt">
        <i className="fi fi-rr-search"></i>
      </button>
      <input
        className="header__search_input"
        type="text"
        placeholder="Search or jump to..."
        onFocus={() => toggleSearch()}
        onBlur={() => toggleSearch()} 
      />
    </div>
  )
}

export default SearchBar
