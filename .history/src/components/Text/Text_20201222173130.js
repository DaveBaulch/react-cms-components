import React from 'react';
import './Text.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const Text = () => {
  const [data] = useData('data/text-data.json');
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
