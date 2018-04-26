import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ className='' }) => (
  <ul className={`Nav__list-unstyled flex ${className}`}>
    <li>
      <NavLink to="/" exact>Home</NavLink>
    </li>
    <li>
      <NavLink to="/search">search</NavLink>
    </li>
  </ul>
);

export default Nav;
