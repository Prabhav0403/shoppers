import { configureStore } from '@reduxjs/toolkit'; // Import from Redux Toolkit
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk'; // Use named import for thunk
import rootReducer from './Reducers/rootReducer'; // Ensure the correct path to the combined reducers

// Create the Redux store with the root reducer and apply middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk middleware
});

// Wrap your application with the Provider to give access to the store
const AppProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

// Export store as default and AppProvider as named
export default store; // Default export
export { AppProvider };
