// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing React Router components
import HomePage from './Components/Home'; // Import the HomePage component
import Dashboard from './Components/Dashboard'; // Import Dashboard
import Navbar from './Components/Navbar'; // Import Navbar

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Routes for different pages */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
