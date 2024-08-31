// src/ProductDashboard.js
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList.jsx';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import ProductDetails from './components/ProductDetails';
import fetchProducts from './api/Products.js';

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [popularityFilter, setPopularityFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setFilteredProducts(data);
            } catch (err) {
                setError(err.message);
            }
        };

        loadProducts();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(Number);
            filtered = filtered.filter(product =>
                product.price >= min && (max ? product.price <= max : true)
            );
        }

        if (popularityFilter) {
            const [min, max] = popularityFilter.split('-').map(Number);
            filtered = filtered.filter(product =>
                product.popularity >= min && (max ? product.popularity <= max : true)
            );
        }

        setFilteredProducts(filtered);
    }, [searchQuery, priceFilter, popularityFilter, products]);

    const productsPerPage = 20;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div>
        <div className='dashboard'>
            <h1>Product Dashboard</h1>
            <div className='header'>
                <div className='searchbar'>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <Filters
                        priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter}
                        popularityFilter={popularityFilter}
                        setPopularityFilter={setPopularityFilter}
                    />
                </div>
            </div>
</div>
            <ProductList products={displayedProducts} onProductClick={setSelectedProduct} />
            {error && <p className="error">{error}</p>}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            {selectedProduct && (
                <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </div>
    );
};

export default ProductDashboard;
