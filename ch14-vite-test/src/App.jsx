import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './App.css'
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';


const App = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(
    (category) => setCategory(category)
    ,
    []);

  const onClick = () => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ce3de345d92d4b7d973a87efae7b13ac')
      .then((response) => {
        setData(response.data);
      });
    // const response = await axios.get(
    //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f'
    // );
  };

  return (
    <div>
      <h1 className='react'>ch14 API 연동해서 뷰어 만들기</h1>
      {/* <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )} */}
      {/* <Categories />
      <NewsList /> */}
      {/* 기존, App -> Categories , category,onSelect 전달,  */}
      {/* 기존, App -> NewsList , category, 전달,  */}
      {/* 업데이트가 계속 발생을 하구나.  */}
      {/* 라우팅을 도입을해서, 업데이트 되는 상황을 줄이자.  */}
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
      {/* 변경,  */}
      {/* App -> NewsPage */}
      {/* <NewsPage /> */}
      {/* 컴포넌트1
      컴포넌트2
      컴포넌트3 */}

      {/* 라우팅 적용하기 */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;