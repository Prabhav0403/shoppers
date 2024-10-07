// src/pages/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from 'c:/Users/DELL/Documents/shoppers/src/Actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCartHandler(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
