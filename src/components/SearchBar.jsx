// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='search'>
    <input
      type="text"
      placeholder="Search by title"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
