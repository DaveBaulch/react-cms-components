import React, { useState } from 'react';

const Context = React.createContext();

export const NavigationStore = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const onActiveChange = () => {
    setIsActive(!isActive);
    console.log('active' + isActive);
    document.body.classList.toggle('nav-active');
  };

  //render() {
  return (
    <Context.Provider
      value={{
        isActive: isActive,
        onActiveChange: onActiveChange
      }}
    >
      {children}
    </Context.Provider>
  );
  //}
};

export default Context;
