import React from 'react';
import { useEffect } from 'react';
import SectorsItem from '../SectorsItem';
import './Sectors.scss';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import useData from '../../hooks/useData';

const Sectors = () => {
  if (isLoading) {
  const [data, isLoading, isError] = useData('data/sectors-data.json');

  useEffect(() => {
    new lazyloadPicturefillBackground();
  }, [dataisLoading, isErro]);

  const { title, sectors } = data;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return (
    <section className="sectors-panel">
      <div className="container">
        <h2 className="sectors-panel__title">{title}</h2>
        <div className="row">
          {sectors &&
            sectors.map((sector) => {
              return (
                <SectorsItem className="item" data={sector} key={sector.id} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Sectors;