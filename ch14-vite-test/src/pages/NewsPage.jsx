import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
    const params = useParams();
    // 카테고리가 선택되지 않았으면 기본값 'all'로 사용
    // http://localhost:5173/science
    // category => science
    const category = params.category || 'all';

    return (
        <>
            <Categories />
            {/* // category => science */}
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;