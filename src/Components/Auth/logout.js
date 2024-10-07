import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process (e.g., clearing tokens)
    const logoutUser = () => {
      // Clear user session, tokens, etc.
      localStorage.removeItem('userToken'); // Example of clearing a token
      // Redirect to login page after logout
      navigate('/login');
    };

    logoutUser();
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      <p>You will be redirected to the login page shortly.</p>
    </div>
  );
};

export default Logout;
