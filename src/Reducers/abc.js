import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_ORDERS_REQUEST,
  USER_ORDERS_SUCCESS,
  USER_ORDERS_FAIL,
} from 'c:/Users/DELL/Documents/shoppers/src/Actions/authactions';

// Initial state for the auth reducer
const initialState = {
  userInfo: null, // User info will hold the token and other user details
  loading: false, // Loading state for async actions
  error: null, // Error state to store error messages
};

// Auth reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
    case USER_ORDERS_REQUEST:
      return { ...state, loading: true, error: null }; // Set loading state

    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload, error: null }; // Set user info and loading false

    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
    case USER_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload }; // Set error message and loading false

    case USER_LOGOUT:
      return { ...state, userInfo: null }; // Clear user info on logout

    case USER_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload, error: null }; // Set orders data

    default:
      return state; // Return the current state if action type doesn't match
  }
};

export default authReducer;
