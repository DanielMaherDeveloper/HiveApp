// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/brand/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCaretDown, faFilter, faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Home Rental Logo" />
      </div>

      <nav className="header__nav">
        <Link to="/" className="header__link">RENT <FontAwesomeIcon icon={faCaretDown} /> </Link>
      </nav>



      <div className="header__profile">
        <Link to="/favorites" className="header__icon header__favorites"><FontAwesomeIcon icon={faUser} /></Link>
        <Link to="/messages" className="header__icon header__messages"><FontAwesomeIcon icon={faFilter} /></Link>
        <Link to="/profile" className="header__icon header__profile"><FontAwesomeIcon icon={faGear} /></Link>
      </div>
      
    </header>
  );
};

export default Header;
