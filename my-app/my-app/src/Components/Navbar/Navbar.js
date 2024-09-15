import React from 'react';
import './Navbar.css'; // Ensure styles for both light and dark themes
import { Link } from 'react-router-dom';
import './Slider.js';
//import Slider from './Components/Navbar/Slider';



const Navbar = ({ theme, setTheme }) => {

  // Toggle the theme between light and dark
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`navbar ${theme}`}> {/* Apply theme class */}
      <img 
        src={theme === 'light' ? "logo-black.png" : "logo-white.png"} 
        alt="logo" 
        className='logo' 
      />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">SignUp</Link></li>
        <li><Link to="/features">Login</Link></li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img 
          src={theme === 'light' ? 'search-b.png' : 'search-w.png'} 
          alt="search icon" 
        />
      </div>

      <img 
        onClick={toggle_mode}
        src={theme === 'light' ? 'night.png' : 'day.png'} 
        alt="toggle theme icon" 
        className='toggle-icon' 
      />
    </div>
  
  );
}

export default Navbar;
