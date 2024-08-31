// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onProductClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.title} onClick={() => onProductClick(product)}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
