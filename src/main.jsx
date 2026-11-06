import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/App.jsx';
import './index.css';
import { initTracking } from './lib/tracking';

initTracking();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);