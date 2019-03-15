import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <div className="navbar-brand">Iron Trello</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" activeClassName="selected" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  </div>
</div>
)

export default Header;
  
