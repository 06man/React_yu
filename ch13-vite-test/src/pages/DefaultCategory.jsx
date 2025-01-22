import React from 'react';
import { useParams } from 'react-router-dom';

const DefaultCategory = () => {
  const { name } = useParams();
  return <h2>{name}의 기본 페이지</h2>;
};

export default DefaultCategory;
