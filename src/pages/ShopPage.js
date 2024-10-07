// src/pages/ShopPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  // Simulate fetching product data
  useEffect(() => {
    // Fetch product data from an API or use hardcoded data for now
    const fetchProducts = async () => {
      const productData = [
        { id: 1, name: 'Product 1', price: 100, imageUrl: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 200, imageUrl: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 150, imageUrl: 'product3.jpg' },
      ];
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
