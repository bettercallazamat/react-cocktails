import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cocktail-logo.png';

const Nav = () => (
  <div className="Nav">
    <Link to="/" title="World Data Home Page">
      <img src={logo} alt="logo" />
    </Link>
    <p>DRINKS & LIFESTYLE</p>
  </div>
);

export default Nav;
