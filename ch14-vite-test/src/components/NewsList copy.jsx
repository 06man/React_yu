// import styled from 'styled-components';
// import NewsItem from './NewsItem';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import usePromise from '../lib/usePromise';
// import PdItem from './PdItem';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// const NewsList = ({ category }) => {
//     // 방법1
//     // 한 파일 내에 , 로직이 포함 된 경우

//     // //추가
//     // const [articles, setArticles] = useState(null);
//     // const [loading, setLoading] = useState(false);
//     // //추가
//     // // 마운트시, 최초에 한번만 데이터를 받아오자, 함수형 컴포넌트
//     // // 생명주기.
//     // useEffect(() => {
//     //     // async를 사용하는 함수 선언
//     //     const fetchData = async () => {
//     //         setLoading(true);
//     //         try {
//     //             // 방법1, 전체기사에 대한 데이터 받기.
//     //             // const response = await axios.get(
//     //             //     'https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f'
//     //             // );
//     //             // 방법2, 각 카테고리별로 받기.
//     //             //추가
//     //             const query = category === 'all' ? '' : `&category=${category}`;
//     //             //추가
//     //             const response = await axios.get(
//     //                 `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
//     //             );
//     //             setArticles(response.data.articles);
//     //         } catch (e) {
//     //             console.log(e);
//     //         }
//     //         setLoading(false);
//     //     };
//     //     // 함수를 이용해야.
//     //     fetchData();
//     //     //category 변경시 마다 , useEffect 함수가 동작함.
//     // }, [category]);

//     // 방법2, 파일 분리해서, 작업. 커스텀 훅스 이용.
//     // 초급, 일단 받아와서 출력
//     // 중급 이상. 최적화 신경.
//     // 고급 이상, 비용을 생각함.
//     const sendData = () => {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         console.log(`category 1: ${category}`)
//         if (category === 'cctvWeather') {
//             console.log(`category 2: ${category}`)
//             return axios.get(
//                 `http://apis.data.go.kr/1360000/RoadWthrInfoService/getCctvStnRoadWthr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=10&pageNo=1&eqmtId=0500C00001&hhCode=00&dataType=json`
//             );
//         }
//         else {
//             return axios.get(
//                 `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
//                 // `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
//             );
//         }

//         // return axios.get(
//         //     `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
//         // );
//     }
//     //추가
//     const [loading, resolved, error] = usePromise(sendData, [category]);

//     //추가
//     // 대기 중일 때
//     if (loading) {
//         return <NewsListBlock>대기 중...</NewsListBlock>;
//     }

//     //추가
//     // 아직 articles 값이 설정되지 않았을 때

//     // 교체1, 커스텀 훅스.
//     // if (!articles) {

//     //데이터 확인.
//     console.log(`데이터 확인1 resolved: ${resolved} `);
//     // console.log(`데이터 확인2 resolved.response : ${resolved.response} `);
//     // console.log(`데이터 확인3 resolved.response.items : ${resolved.response.items} `);
//     // console.log(`데이터 확인4 resolved.response.items.item : ${resolved.response.items.item} `);

//     if (!resolved) {
//         // 데이터가 받아 온게 없으면 , 화면에 그리지 않는다.
//         return null;
//     }
//     //추가, 커스텀 훅스
//     // 에러가 발생했을 때
//     if (error) {
//         return <NewsListBlock>에러 발생!</NewsListBlock>;
//     }

//     //추가, 커스텀 훅스
//     // resolved 값이 유효할 때

//     // if (category === 'cctvWeather') {
//     //     const { item } = resolved.data.response.body.items;
//     //     console.log(`데이터 확인2 item: ${item}`)
//     //     console.log(`데이터 확인3 item: ${item[0].baseDate}`)
//     //     console.log(`데이터 확인4 item: ${item[0].baseTime}`)
//     //     console.log(`데이터 확인5 item: ${item[0].weatherNm}`)
//     // }

//     const data = category === 'cctvWeather'
//         ? resolved.data.response.body.items.item // category가 cctvWeather인 경우 item 사용
//         : resolved.data.articles;


//     // articles 값이 유효할 때
//     return (
//         <NewsListBlock>
//             {/* 추가 */}
//             {/* articles = [{기사1},{기사2},{기사3}...] */}
//             {
//                 category === 'cctvWeather'
//                     ? data.map((data, index) => (
//                         <PdItem key={index} article={data} />
//                     ))
//                     : data.map((article) => (
//                         <NewsItem key={article.url} article={article} />
//                     ))
//             }
//         </NewsListBlock>
//     );
// };

// export default NewsList;