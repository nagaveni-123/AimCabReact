import React from 'react';
import './Header.css'; // Import the CSS file for this component
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AimCab Services</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Flights</li>
          <li className="nav-item">Hotels</li>
          <li className="nav-item">Trains</li>
          <li className="nav-item"><Link to='/Login.jsx'>Login</Link></li>
      
          {/* Add more navigation items */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;