// src/pages/AccountPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AccountPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const updateAccountHandler = (e) => {
    e.preventDefault();
    // Dispatch action to update user account
  };

  return (
    <div className="account-page">
      <h1>Account Details</h1>
      <form onSubmit={updateAccountHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default AccountPage;
