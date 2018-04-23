import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => (
  <ul className={'Nav__list-unstyled'}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/search">search</Link>
    </li>
  </ul>
);

export default Nav;
