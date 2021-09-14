import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cocktail-logo.png';
import '../assets/styles/Nav.css';

const Nav = () => (
  <div className="Nav">
    <Link to="/" title="Home Page">
      <img src={logo} alt="logo" />
    </Link>
    <p data-testid="logoText">DRINKS & LIFESTYLE</p>
  </div>
);

export default Nav;
