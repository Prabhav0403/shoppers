// src/reducers/cartReducer.js
const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = action.payload;
        const existItem = state.cartItems.find(x => x.id === item.id);
  
        if (existItem) {
          // Update the quantity of the existing item
          return {
            ...state,
            cartItems: state.cartItems.map(x => (x.id === existItem.id ? item : x)),
          };
        } else {
          // Add the new item to the cart
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(x => x.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  