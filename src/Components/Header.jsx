import React from 'react';
import Logo from '../images/logo.png'

function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="140px" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">HOME <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Select">SELECT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Numbers"> NUMBERS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services"> SERVICES </a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
