// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // keep this import if you already have index.css (fine for small resets)

//
// Inject Pacifico font dynamically so we can use it via inline styles everywhere
//
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
