import axios from 'axios';

// Action types
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_ORDERS_REQUEST = 'USER_ORDERS_REQUEST';
export const USER_ORDERS_SUCCESS = 'USER_ORDERS_SUCCESS';
export const USER_ORDERS_FAIL = 'USER_ORDERS_FAIL';

// Login action
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    // Make API request to authenticate user
    const { data } = await axios.post('/api/login', { email, password });

    // Dispatch success and store user data with token
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Store token in localStorage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Register action
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    // API request to register the user
    const { data } = await axios.post('/api/register', userData);

    // Dispatch success and store user data
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    // Automatically log the user in after registration
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Store token in localStorage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Logout action
export const logoutUser = () => (dispatch) => {
  // Remove user info and token from localStorage
  localStorage.removeItem('userInfo');

  // Dispatch logout action to clear the Redux state
  dispatch({ type: USER_LOGOUT });
};

// Get user orders action
export const getUserOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_ORDERS_REQUEST });

    // Get the user's token from localStorage
    const { auth: { userInfo } } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Make API request to get user orders
    const { data } = await axios.get('/api/orders', config);

    dispatch({
      type: USER_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ORDERS_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};
