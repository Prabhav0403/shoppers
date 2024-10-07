// src/actions/cartActions.js
export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      },
    });
  
    // Save the cart to local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  
    // Save the updated cart to local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  