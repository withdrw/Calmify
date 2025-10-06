import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';   // Make sure this file exists
import App from './App'; // This imports the default export from './App.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();