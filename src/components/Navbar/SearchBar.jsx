import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="search-bar__input"
      />
      <button onClick={handleSearch} className="search-bar__button">Search</button>
    </div>
  );
};

export default SearchBar;
