import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// Construct the backend API URL using the codespace name and set it as a global variable
const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
const protocol = window.location.protocol === 'https:' ? 'https' : 'http';
const apiUrl = codespaceName
  ? `${protocol}://${codespaceName}-8000.app.github.dev`
  : '';
window.REACT_APP_CODESPACE_URL = apiUrl;
console.log('REACT_APP_CODESPACE_URL:', apiUrl);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
