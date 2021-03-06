import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  const buttonRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const logit = () => {
      setScrollY(window.pageYOffset);
      if (scrollY > 100) {
        buttonRef.current.classList.add('active');
      } else {
        buttonRef.current.classList.remove('active');
      }
    };

    function watchScroll() {
      window.addEventListener('scroll', logit, { passive: true });
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, [scrollY]);
  return (
    <div>
      <a href="#skip-navigation" ref={buttonRef} className="btn-scroll-top">
        {props.children}
      </a>
    </div>
  );
};

export default ScrollTopButton;
