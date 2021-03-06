import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ children }) => (
  <div className="logo">
    <Link to="/" className="logo__link">
      {children}
    </Link>
  </div>
);

export default Logo;
