import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ className='' }) => (
  <ul className={`Nav__list-unstyled flex ${className}`}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/search">search</Link>
    </li>
  </ul>
);

export default Nav;
