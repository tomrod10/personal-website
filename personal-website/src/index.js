import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css';

import App from './App';
import { Gallery } from './components/MainContent/Gallery.tsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="all" element={<Gallery />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

