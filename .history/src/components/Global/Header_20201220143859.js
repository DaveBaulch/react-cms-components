import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import { Link } from 'react-router-dom';
import SidenavToggle from './SidenavToggle';

const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        <header className="header">
          <SidenavToggle onNavClick={onNavClick} />
          <div className="logo">
            <Link to="/" className="logo__link">
              Site logo
            </Link>
          </div>
          <div className="navigation-items"></div>
        </header>
      </div>
    </div>
  );
};

export default Header;
