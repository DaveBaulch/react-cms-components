import React from 'react';
import './Main.scss';

const Main = ({ children }) => {
  return (
    <main id="main" className="main">
      {children}
    </main>
  );
};

export default Main;
