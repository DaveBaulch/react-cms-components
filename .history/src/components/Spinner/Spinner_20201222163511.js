import React from 'react';
import './Spinner.scss';

const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="spinner-background">
      <div className="spinner"><p>{message}{</p></div>
    </div>
  );
};

export default Spinner;
