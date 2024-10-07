import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'c:/Users/DELL/Documents/shoppers/src/Actions/authactions';
import { TextField, Button, Typography, Paper } from '@mui/material';

const Register = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };
        dispatch(registerUser(userData));
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
            <Typography variant="h4" align="center">Register</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </Button>
            </form>
        </Paper>
    );
};

export default Register;
