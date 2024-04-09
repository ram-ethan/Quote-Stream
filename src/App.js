// import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './HomePage';

import { Routes, Route } from 'react-router-dom';
import About from './About';
import Navbar from './Components/Navbar';
// import Card from './Components/Card';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
