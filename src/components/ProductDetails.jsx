// src/components/ProductDetails.js

import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="modal">
      <h2>{product.title}</h2>
      <p><span>Price:</span> {product.price}</p>
      <p><span>Popularity:</span> {product.popularity}</p>
      <p><span>Description:</span> {product.description || 'No description available.'}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductDetails;
