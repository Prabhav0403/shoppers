// src/components/Footer.js
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Footer = () => {
    return (
        <Grid container justifyContent="center" style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="body1">© 2024 My E-Commerce. All rights reserved.</Typography>
            </Grid>
            <Grid item xs={12}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'inline', margin: '0 10px' }}>
                        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                    </li>
                    <li style={{ display: 'inline', margin: '0 10px' }}>
                        <Link to="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link>
                    </li>
                    <li style={{ display: 'inline', margin: '0 10px' }}>
                        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
                    </li>
                </ul>
            </Grid>
        </Grid>
    );
};

export default Footer;
