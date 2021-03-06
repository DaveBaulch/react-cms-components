import React from 'react';
import '../../sass/components/_card.scss';

const Card = () => {

  return (
    <article className="section card-list-block">
      <div className="container">
        <div className="card-list">
          <div className="card-list__heading">
            <h2>{data.title}</h2>
          </div>

          <ol className="card-list__list">
            <li className="card-list__item" key="item.id">
              <Card className="item" />
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
};

export default Cards;
