import React from 'react';

const SocialSharingItem = (props) => {
  return (
    <React.Fragment>
      <a href={props.href} className="social-sharing-item">
        {props.children}
      </a>
    </React.Fragment>
  );
};

export default SocialSharingItem;


