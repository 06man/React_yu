// 추가1
import { useState, useCallback } from 'react';
// 추가1
import { MdAdd } from 'react-icons/md';
// import { IoMdAirplane } from "react-icons/io";
import './TodoInsert.scss';

// 추가2-1 , onInsert(함수)

const TodoInsert = ({ onInsert }) => {
    //추가1-2
    const [value, setValue] = useState('');

    // useCallback(콜백함수, []), []:함수를 한번 생성, 
    //[변수], 변수 값에 따라서, 매번 함수를 새로 생성.
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    //추가1-2

    // 추가2-2, useCallback-> 함수를 새롭게 생성함.
    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        // 추가2-3, onSubmit={onSubmit
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
                // 추가1-3
                value={value}
                onChange={onChange} />
            {/* 추가1-3 */}
            <button type="submit">
                <MdAdd />
                {/* <IoMdAirplane /> */}
            </button>
        </form>
    );
};

export default TodoInsert;