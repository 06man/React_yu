import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가
    return sum / numbers.length;
};


const AverageUseCallback = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');



    // 결과, 함수를 한번 생성 후, 재사용
    // 확인2
    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    // 추가1, useCallback
    // 정의, useCallback(콜백함수, 의존성 배열), -> 기존에 만든 함수 재사용 목적. 
    // 의존성 배열의 요소에 따라서, 매번 새로운 함수 생성할지 여부 결정, 
    // 빈배열, 1번만 생성하고, 재사용, 
    // [name], name  변경시 마다, 새로운 함수를 생성. 

    // 비슷한 모양, useEffect(콜백함수, 의존성 배열)
    // 주의사항, 함수를 새롭게 생성 여부를 확인하는 방법
    // 가장 간단한 방법, 자바에서, 해당 인스턴스의 ID , 임시 메모리 주소 비슷한 숫자 반환 받음
    // 자바스크립트 에서는, 해당 메모리 주소에 직접 접근이 안됨. 설계상 구조가. 

    // 현재 상태는, useCallback 사용해도, 구조가, number, list 가 변경시 마다, 
    // 새로운 함수를 만들고, 사용중. 

    // 결과, 함수를 계속 새롭게 생성 후, 재사용 안함. 
    // 확인1
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number, 10));
        setList(nextList);
        setNumber('');
    }, [number, list]); // number 또는 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    //추가 작업 순서1, 함수의 새롭게 생성되는지 여부 확인. 
    // import 필요 , useRef
    const previousCallback = useRef(null); // 이전 함수 참조 저장

    // 추가 작업 순서2,
    // 이전 함수와 현재 함수 비교
    if (previousCallback.current !== onChange) {
        console.log("onChange 함수가 새로 생성되었습니다.");
    } else {
        console.log("onChange 함수가 재사용되고 있습니다.");
    }
    // 추가 작업 순서3,
    // 현재 함수 참조를 저장
    previousCallback.current = onChange;


    return (
        <div>
            <input
                value={number}
                onChange={onChange}
                placeholder="숫자를 입력하세요"
            />
            <button onClick={onInsert}>추가</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default AverageUseCallback;