import React from 'react';
import navigationContext from '../contexts/LanguageContext';

const SidenavToggle = ({ onNavClick }) => {
  return (
    <div className="drawer-toggle" role="button" onClick={() => onNavClick()}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SidenavToggle;
