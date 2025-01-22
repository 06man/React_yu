import { useParams } from 'react-router-dom';

const data = {
  yuman: {
    name:'영욱맨',
    description:'기모띠',
  },
    
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
    //작업1
  const params = useParams(); 
  // useParams 호출 형태 수정
  const profile = data[params.username]; 
  // params에서 username 가져오기


  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p> // 닫는 태그 수정
      )}
    </div>
  );
};

export default Profile;