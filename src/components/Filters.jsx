// src/components/Filters.js
import React from 'react';

const Filters = ({ priceFilter, setPriceFilter, popularityFilter, setPopularityFilter }) => {
  return (
    <div className='filters'>
      <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
        <option value="">All Prices</option>
        <option value="0-5000">0-5000</option>
        <option value="5000-10000">5000-10000</option>
        <option value="10000-20000">10000-20000</option>
        <option value="20000+">20000+</option>
      </select>

      <select value={popularityFilter} onChange={(e) => setPopularityFilter(e.target.value)}>
        <option value="">All Popularity</option>
        <option value="0-10000">0-10000</option>
        <option value="10000-30000">10000-30000</option>
        <option value="30000-50000">30000-50000</option>
        <option value="50000+">50000+</option>
      </select>
    </div>
  );
};

export default Filters;
