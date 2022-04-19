import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import { Test } from './components/test.tsx';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

