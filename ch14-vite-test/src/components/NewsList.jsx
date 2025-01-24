import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import PdItem from './PdItem';
import PdItemBusan from './PdItemBusan';
import PdItemUlsan from './PdItemBusanFe';
import PdItemBusanFe from './PdItemBusanFe';
import PdItemBusanFo from './PdItemBusanFo';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {

    const sendData = () => {
        const query = category === 'all' ? '' : `&category=${category}`;
        console.log(`category 1: ${category}`)
        if (category === 'cctvWeather') {
            console.log(`category 2: ${category}`)
            return axios.get(
                `https://apis.data.go.kr/1360000/RoadWthrInfoService/getCctvStnRoadWthr?serviceKey=jBlOCrAQ%2FobTb4Y0YOByU7V6Kf1czVQrMe2k1C%2FC4E8xKUUvFqRR59DmYcQjMtkrtC9csTS5bNOiaz%2BA7Aw2Rg%3D%3D&numOfRows=10&pageNo=1&eqmtId=0500C00001&hhCode=00&dataType=json`
            );
        }

        else if (category === 'busanAtt') {
            console.log(`category 2: ${category}`)
            return axios.get(
                `http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=jBlOCrAQ%2FobTb4Y0YOByU7V6Kf1czVQrMe2k1C%2FC4E8xKUUvFqRR59DmYcQjMtkrtC9csTS5bNOiaz%2BA7Aw2Rg%3D%3D&numOfRows=10&pageNo=1&resultType=json`
            );
        }
        else if (category === 'busanFestival') {
            console.log(`category 2: ${category}`)
            return axios.get(
                `http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=jBlOCrAQ%2FobTb4Y0YOByU7V6Kf1czVQrMe2k1C%2FC4E8xKUUvFqRR59DmYcQjMtkrtC9csTS5bNOiaz%2BA7Aw2Rg%3D%3D&numOfRows=10&pageNo=1&resultType=json`);
        }
        else if (category === 'busanFood') {
            console.log(`category 2: ${category}`)
            return axios.get(
                `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=jBlOCrAQ%2FobTb4Y0YOByU7V6Kf1czVQrMe2k1C%2FC4E8xKUUvFqRR59DmYcQjMtkrtC9csTS5bNOiaz%2BA7Aw2Rg%3D%3D&numOfRows=10&pageNo=1&resultType=json`
            )
        }
        else {
            return axios.get(
                `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=ce3de345d92d4b7d973a87efae7b13ac`
                // `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
            );
        }

        // return axios.get(
        //     `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
        // );
    }
    //추가
    const [loading, resolved, error] = usePromise(sendData, [category]);

    //추가
    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }

    if (!resolved) {
        // 데이터가 받아 온게 없으면 , 화면에 그리지 않는다.
        return null;
    }
    //추가, 커스텀 훅스
    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    const data = category === 'cctvWeather'
    ? resolved.data.response?.body?.items?.item || []
    : category === 'busanAtt'
        ? resolved.data.getAttractionKr?.item || []
        : category === 'busanFestival'
        ? resolved.data.getFestivalKr.item || []
        : category === 'busanFood'
        ? resolved.data.getFoodKr.item || []
        : resolved.data.articles || [];

console.log('Resolved data for', category, resolved.data);

if (!data || data.length === 0) {
    return <NewsListBlock>표시할 데이터가 없습니다.</NewsListBlock>;
}

return (
    <NewsListBlock>
        {category === 'cctvWeather' ? (
            data.map((data, index) => <PdItem key={index} article={data} />)
        ) : category === 'busanAtt' ? (
            data.map((data, index) => <PdItemBusan key={index} article={data} />)
        ) : category === 'busanFestival' ? (
            data.map((data, index) => <PdItemBusanFe key={index} article={data} />)
        ) : category === 'busanFood' ? (
            data.map((data, index) => <PdItemBusanFo key={index} article={data} />)
        ) : (
            data.map((data) => <NewsItem key={data.url} article={data} />)
        )}
    </NewsListBlock>
);

};

export default NewsList;