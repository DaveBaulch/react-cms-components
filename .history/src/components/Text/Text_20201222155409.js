import React from 'react';
import './Text.scss';
import useData from '../../hooks/useData';

const Text = () => {
  const [data] = useData('data/quote-data.json');
  const { text } = data;

  return (
    <div className="section text-block">
      <div className="container">
        <div className="row">
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{
              __html: text
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Text;
