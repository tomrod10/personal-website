import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/:all" element={<App />} />
          <Route path="/:design" element={<App />} />
          <Route path="/:images" element={<App />} />
          <Route path="/:architecture" element={<App />} />
          <Route path="/:art" element={<App />} />
          <Route path="/:other" element={<App />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


