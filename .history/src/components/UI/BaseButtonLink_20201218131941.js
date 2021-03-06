import React from 'react';
import '../../sass/components/_buttons.scss';

const ButtonLink = (props) => {
  return (
    <a href={props.href} className={`button ${props.class}`}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
