import React, { useState } from 'react';
import Info from './component/Info';
import CounterUsereducer from './component/CounterUsereducer';
import InfoUserReducer from './component/InfoUserReducer';
import Average from './component/Average';
import AverageUseCallback from './component/AverageUseCallback';
import AverageUseRef from './component/AverageUseRef';
import InfoCustomHooks from './component/InfoCustomHooks';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <h1 className='react'>ch8 hooks 함수형 컴포넌트 추가 기능 확인</h1>
        {/* <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
        */}
      </div>
      {/* <h2>useReducer 버전 Counter</h2>
      <CounterUsereducer />
      <InfoUserReducer /> */}
      <Average />
      {/* <AverageUseCallback />
      <AverageUseRef /> */}
      {/* <InfoCustomHooks /> */}
    </>
  );
};

export default App;