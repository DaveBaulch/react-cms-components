import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

const Main = (props) => {
  const { isActive } = useContext(NavigationContext);

  return (
    <main id="main" className="main">
      {props.children}
    </main>
  );
};

export default Main;
