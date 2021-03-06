import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import '../../sass/components/_cards.scss';

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cards-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data.cards);

  if (data {

  })


  return (
    <article className="section card-list-block">
      <div className="container">
        <div className="card-list">
          <div className="card-list__heading">
            <h2>{data.title}</h2>
          </div>
          <ol className="card-list__list">cards</ol>
        </div>
      </div>
    </article>
  );
};

export default Cards;
