import './App.css'
// 준비물1
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Category from './pages/Category';
import LaguageSeletor from './pages/LaguageSelector';
import CategoryDetails from './pages/CategoryDetails';
import DefaultCategory from './pages/DefaultCategory';

function App() {

  return (
    <>
      <h1 className='react'>ch13 리액트 라우팅</h1>
      <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<Home />}
                {/* 아래와 같은 의미임. */}
        <Route index element={<Home/>} />
        <Route path="/category/:name/*" element={<Category />}>
  <Route index element={<DefaultCategory />}/>
  <Route path="details" element={<CategoryDetails />} />
</Route>
           {/*추가 Layout을 적용하는 그룹 */}
        <Route path="/about" element={<About />} />
        {/* 추가, :username 이부분이 useParams 로 가져오는 대상. */}
        {/* 예시, http://localhost:5173/profiles/gildong */}
        <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/Articles" element={<Articles />} >
          {/* 중첩 라우팅 설정1, 
          주의사항, 태그의 닫는 부분을 주의, 
        중첩 라우팅 부모 요소의 자식으로 추가 
        <Route>자식요소의 위치</Route>
        */}
          <Route path=":id" element={<Article />} />
        </Route>
        {/* <Route path="/Articles/:id" element={<Article />} /> */}
        {/* 추가 Not Found 페이지 */}

      <Route path="*" element={<NotFound />} />
    <Route path="login" element={<Login />} />
<Route path="mypage" element={<MyPage />} />
</Routes>
    </>
  )
}

export default App
