import React from 'react';
import SidenavToggle from './SidenavToggle';

const Header = ({ onNavClick }) => {
  return (
    <div className="header-container">
      <div className="container">
        <header className="header"><>
          <SidenavToggle onNavClick={onNavClick} />
          <div className="logo"><a href="/" clas>Site logo</div>
          <div className="navigation-items"></div>
        </header>
      </div>
    </div>
  );
};

export default Header;