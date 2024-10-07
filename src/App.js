// src/App.js
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import store from './store';
import { Provider } from 'react-redux';
import Navbar from './Components/Layout/Navbar.js';
import Footer from './Components/Layout/Footer.js';
import Home from './Components/home.js';
import Login from './Components/Auth/login.js';
import Register from './Components/Auth/Register.js';
import AccountPage from './pages/AccountPage.js'; // Assuming this is your account page
import PrivateRoute from './Components/PrivateRoute.js'; // Assuming you have a PrivateRoute component

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/account" element={<PrivateRoute component={AccountPage} />} />
                            </Routes>
                        </header>
                        <Footer />
                    </div>
                </Router>
            </ThemeProvider>
        </Provider>
    );
};

export default App;