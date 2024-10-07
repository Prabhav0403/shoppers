import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './store'; // Import AppProvider from store
import 'bootstrap/dist/css/bootstrap.min.css';

// Use AppProvider to wrap your App component
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
