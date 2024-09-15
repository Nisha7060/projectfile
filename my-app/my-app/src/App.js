import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';  // Correct path to Navbar
import Home from './pages/Home';
import About from './pages/About us';              // Correct path to About
import SignUp from './pages/SignUp';         // Correct path to Products
import Login from './pages/Login';
//import Slider from './Components/Navbar/Slider';

        // Correct path to Features

function App() {
  // Manage theme state here
  const [theme, setTheme] = useState('light'); // default theme is light

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<SignUp />} />
          <Route path="/features" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;