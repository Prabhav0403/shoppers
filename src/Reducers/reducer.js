import { combineReducers } from 'redux';
import authReducer from './abc'; // Ensure correct casing
import cartReducer from './cartReducer'; // Ensure correct casing

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default Reducer;
