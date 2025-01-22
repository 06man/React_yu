import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/velopert">velopert의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/lsy">lsy의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to="/Articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
