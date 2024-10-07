import { combineReducers } from 'redux';
import authReducer from './abc'; // Use relative paths to import your reducers
import cartReducer from './bcd'; // Import your other reducers as needed
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer, // Add other reducers here
});

export default rootReducer;
