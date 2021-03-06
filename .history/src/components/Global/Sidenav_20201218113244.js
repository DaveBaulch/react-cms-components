import React from 'react';
import { Link } from 'react-router-dom';
import SidenavClose from './SidenavClose';

const Sidenav = ({ onNavClick }) => {
  return (
    <div className="sidenav-container">
      <div className="sidenav-backdrop" onClick={() => onNavClick()}></div>

      <div className="sidenav-wrapper">
        <SidenavClose onNavClick={onNavClick} />

        <div className="sidenav" onClick={() => onNavClick()}>
          <h2>Components</h2>
          <ul className="nav-list">
            <li>
              <Link to="/hero" className="nav-item">
                Hero
              </Link>
            </li>
            <li>
              <Link to="/carousel" className="nav-item">
                Carousel
              </Link>
            </li>
            <li>
              <Link to="/cards" className="nav-item">
                Cards
              </Link>
            </li>
            <li>
              <Link to="/cta" className="nav-item">
                CTA
              </Link>
            </li>
            <li>
              <Link to="/quote" className="nav-item">
                Quote
              </Link>
            </li>
            <li>
              <Link to="/text" className="nav-item">
                Text
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
