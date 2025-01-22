import React from 'react';
import { useParams, useSearchParams, Outlet } from 'react-router-dom';

const Category = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  return (
    <div>
      <h1>카테고리: {name}</h1>
      <p>언어: {lang}</p>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
};

export default Category;
