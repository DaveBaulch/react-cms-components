import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

const Main = ({ children }) => (
  <main id="main" className="main">
    {children}
  </main>
);

Logo.propTypes = {
  children: PropTypes.any
};

export default Main;
