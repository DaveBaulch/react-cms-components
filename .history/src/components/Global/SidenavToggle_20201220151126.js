import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

// const SidenavToggle = ({ onNavClick }) => {
//   return (
//     <div className="drawer-toggle" role="button" onClick={() => onNavClick()}>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//   );
// };

const SidenavToggle = () => {
const buttonRef = useRef();  const { isActive, onActiveChange } = useContext(NavigationContext);
  console.log('?' + isActive);
  

  useEffect(() => {
    if (!isActive) {
      console.log('here');
      buttonRef.current.focus();
    }
  }, [isActive]);

  return (
    <div>
      <div
        className="drawer-toggle"
        role="button"
        onClick={() => onActiveChange()}
        ref={buttonRef}
        tabIndex="-1"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default SidenavToggle;
