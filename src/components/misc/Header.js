import React from 'react';

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <div className="navbar-brand">Navbar</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <div className="nav-link">Home <span className="sr-only">(current)</span></div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Features</div>
      </li>
    </ul>
  </div>
</div>
)

export default Header;
  
