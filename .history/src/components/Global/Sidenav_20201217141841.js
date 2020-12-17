import React from 'react';
import { useState, useEffect } from 'react';

const Sidenav = () => {
  return (
    <React.Fragment>
    <div classNameName="sidenav-container">
        
      <div className="sidenav-backdrop"></div>

      <div></div>
        className="sidenav">
        <h2>Components</h2>
        <ul
          className="nav-list"
          <li className="nav-item"><router-link to="/hero" className="component-list__link">Hero</router-link></li>
          <li className="nav-item"><router-link to="/carousel" className="component-list__link">Carousel</router-link></li>
          <li className="nav-item"><router-link to="/sectors" className="component-list__link">Sectors</router-link></li>
          <li className="nav-item"><router-link to="/cards" className="component-list__link">Cards</router-link></li>
          <li className="nav-item"><router-link to="/cta" className="component-list__link">CTA</router-link></li>
          <li className="nav-item"><router-link to="/quote" className="component-list__link">Quote</router-link></li>
          <li className="nav-item"><router-link to="/text" className="component-list__link">Text</router-link></li>
          <li className="nav-item"><router-link to="/accordion" className="component-list__link">Accordion</router-link></li>
        </ul>

        <h2>Pages</h2>
        <ul
          className="nav-list"
          <li className="nav-item"><router-link to="test-page">Test page</router-link></li>
          <li className="nav-item"><router-link to="test-page2">Test page 2</router-link></li>
        </ul>      
      </div>
    </div>
  </React.Fragment>
  )
};

export default Sidenav;
