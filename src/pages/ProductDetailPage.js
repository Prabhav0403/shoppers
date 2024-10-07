// src/pages/ProductDetailPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'c:/Users/DELL/Documents/shoppers/src/Actions/cartActions';

const ProductDetailPage = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Default to 1
    }));
  };

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
