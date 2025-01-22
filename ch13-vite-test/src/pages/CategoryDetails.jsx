import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const { name } = useParams();
  return <h2>{name}의 상세 정보</h2>;
};

export default CategoryDetails;
