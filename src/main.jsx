import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${'0.0.0.0'}`);
});