import React from 'react';
import { useEffect } from 'react';
import Text from '../components/Components/Text';

const TextPage = () => {
  useEffect(() => {
    document.title = 'Cards page';
  }, []);

  return (
    <React.Fragment>
      <h1>Text</h1>
      <Text />
    </React.Fragment>
  );
};

export default TextPage;
