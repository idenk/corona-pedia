import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  return (
    <div id="nav-body">
      <span id="title">
        <span id="name">Corona Pedia</span>
      </span>
      <div id="menu">
        <Link to="/">코로나 현황</Link>
        <Link to="/vaccine">백신</Link>
      </div>
    </div>
  );
}

export default Nav;
