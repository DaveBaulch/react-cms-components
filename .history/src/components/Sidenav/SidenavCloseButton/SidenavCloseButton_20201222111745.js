import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../../contexts/NavigationContext';

const SidenavClose = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);
  const buttonRef = useRef();

  useEffect(() => {
    if (isActive) {
      buttonRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const keyHandler = (event) => {
      if (isActive && event.keyCode === 27 && window.innerWidth < 768) {
        onActiveChange();
      }
    };

    function watchKeyPress() {
      window.addEventListener('keydown', keyHandler);
    }
    watchKeyPress();
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });

  return (
    <button
      className="drawer-close"
      onClick={() => onActiveChange()}
      ref={buttonRef}
    >
      {/*TODO: <span className="sr-only">Close</span>*/}
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default SidenavClose;
