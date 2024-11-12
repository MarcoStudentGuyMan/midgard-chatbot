import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Location from './Home/Location';
import FoodPlace from './Home/FoodPlace';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/food-places" element={<FoodPlace />} /> {/* Add route for Food Places */}
      </Routes>
    </Router>
  );
}

export default App;
