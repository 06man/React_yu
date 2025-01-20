import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    // reduce, 내장함수, -> 이전값을 받아서, 행위를 해서, 새로운 값을 누적해서 반환. 
    // reduce(콜백함수, 초깃값)
    const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가
    return sum / numbers.length;
};
 // 마지막에 추가된 요소의 인덱스 기억

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        const value = e.target.value;
        // NaN = Not a Numeber (value.trim() !== "")공백
        if(!isNaN(value) && value.trim() !== "") {
            console.log("숫자인 경우만 onChange")
            setNumber(value)
        }
        // console.log("숫자가 아닌 경우만 onChange")
        // setNumber(e.target.value);
    };
    const [lastAddedIndex, setLastAddedIndex] = useState(null);

    const onInsert = () => {
        // parseInt(number, 10), number 문자열로 된 숫자, 숫자 타입 변경, 
        // 진법 10 진법 표기. 
        const parsedNumber = parseInt(number, 10);
        // 숫자가 아니거나 (&&) 숫자가 0보다 작을시
        if((isNaN(parsedNumber) && parsedNumber < 0) || parsedNumber > 100 ){
            alert("1~100 사이 숫자만 입력해주세요")
            setNumber('');
            return;
        }

        const nextList = list.concat(parseInt(number, 10));
        setList(nextList);
        setNumber('');
        // 인덱스 추가. 최근 추가된 요소의 인덱스, 0부터 시작한 값이라 -1.
        setLastAddedIndex(nextList.length - 1)
    };


    // useMemo, 추가, 기존 평균 구하는 함수를 메모 이용하기. 
    // 밑줄 추가하지않으면, 불필요한 연상을 계속함.
    const avg = useMemo(() => getAverage(list), [list]);
    // const avg = getAverage(list);

    return (
        <div>
            <input value={number} onChange={onChange} placeholder="숫자를 입력하세요" />
            <button onClick={onInsert}>추가</button>
            <ul>
                {list
                // .filter((value)) => value > avg)
                .map((value, index) => (
                    <li key={index}>
                        {/* 숫자 컬러 추후 수정 */}
                    {/* style={{ color: index === lastAddedIndex ? 'red' : 'black' }} */}
                    {value}</li>
                ))}
            </ul>
            <div>
                {/* <b>평균값:</b> {getAverage(list)} */}
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;