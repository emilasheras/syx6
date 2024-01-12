import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import syxlog from './utils/syxlog.js';

syxlog.debug(`MODE`,import.meta.env.MODE);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
