import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Components/Cards';

const CardsPage = () => {

  return (
    <React.Fragment>
      <h1>Cards</h1>
      <Cards data={data} />
    </React.Fragment>
  );
};

export default CardsPage;
