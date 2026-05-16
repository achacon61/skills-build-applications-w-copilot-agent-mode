
// Log the codespace API URL for debugging
console.log('REACT_APP_CODESPACE_URL:', process.env.REACT_APP_CODESPACE_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
