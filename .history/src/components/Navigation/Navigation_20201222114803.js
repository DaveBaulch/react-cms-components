import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/hero" className="navigation__link">
          Hero
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/carousel" className="component-list__link">
          Carousel
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/cards" className="component-list__link">
          Cards
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/sectors" className="component-list__link">
          Sectors
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/cta" className="component-list__link">
          CTA
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/quote" className="component-list__link">
          Quote
        </Link>
      </li>
      <li className="component-list__item">
        <Link to="/text" className="component-list__link">
          Text
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
