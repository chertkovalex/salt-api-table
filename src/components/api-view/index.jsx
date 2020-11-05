import React from 'react';
import Header from './Header';
import Content from './Content';
import data from '../../constants/fe_data.json';

const APIView = () => {
  return (
    <>
      <Header data={data} />
      <Content data={data} />
    </>
  );
};

export default APIView;
