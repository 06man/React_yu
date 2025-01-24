import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column; /* 이미지와 텍스트가 세로로 배치되도록 변경 */
  align-items: center; /* 텍스트와 이미지가 중앙 정렬되도록 설정 */
  padding: 1rem;
  border: 1px solid #ddd; /* 카드 형태로 보이도록 테두리 추가 */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  background-color: #f9f9f9;

  .thumbnail {
    width: 100%; /* 썸네일 크기 조정 */
    max-width: 300px; /* 썸네일 최대 크기 제한 */
    margin-bottom: 1rem;

    img {
      display: block;
      width: 100%;
      height: auto; /* 이미지 비율 유지 */
      border-radius: 8px;
    }
  }

  .contents {
    width: 100%;
    max-width: 500px; /* 텍스트 최대 크기 제한 */
    text-align: center;

    h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
    }

    p {
      margin: 0.5rem 0;
      font-size: 1rem;
      line-height: 1.5;
      color: #555;
      white-space: normal;
    }

    a {
      display: inline-block;
      margin-top: 1rem;
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

// 부모 App -> NewsList -> NewsItem
const PdItemBusanFe = ({ article }) => {
  const { MAIN_TITLE, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB, HOMEPAGE_URL } = article;

  return (
    <NewsItemBlock>
      {/* 이미지 썸네일 */}
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_THUMB} alt={MAIN_TITLE || "이미지 썸네일"} />
          </a>
        </div>
      )}

      {/* 텍스트 컨텐츠 */}
      <div className="contents">
        <h2>{MAIN_TITLE || "제목 없음"}</h2>
        <p>{ITEMCNTNTS || "상세 내용이 없습니다."}</p>
        <p>{ADDR1 || "주소 정보가 없습니다."}</p>

        {/* 홈페이지 링크 */}
        {HOMEPAGE_URL && (
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            자세히 보기
          </a>
        )}
      </div>
    </NewsItemBlock>
  );
};

export default PdItemBusanFe;
