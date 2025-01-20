import React, { useReducer } from 'react';

// 준비물 , 리듀서 함수, dispatch 호출시, 여기로 와서, action으로 분기 작업함. 

// 순서3, 예시) action = {name : "ㅇ"}
function reducer(state, action) {
    return {
        ...state, // 초기값, { name: '', nickname: '',}
        [action.name]: action.value,
        // 초기값, { name: 'ㅇ', nickname: '',}
    };
}

const InfoUserReducer = () => {
    //useReducer(리듀서 함수, 초깃값)
    // 반환 값은, 1) 상태 state 2) dispatch ,호출시, 리듀서 함수에 액션을 달고 감.
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });

    const { name, nickname } = state;

    // 순서2, 예시)  ㅇ  입력시 ->onChange 동작
    const onChange = (e) => {
        // 호출되면, 리듀서 함수로 간다. 액션을 달고 갑니다. 
        dispatch({
            name: e.target.name, // <input name=name
            value: e.target.value, //<input value,  예시) ㅇ
        });
    };

    return (
        <div>
            <div>
                {/* 순서1, 예시)  ㅇ  입력시 ->onChange 동작 */}
                <input name="name" value={name} onChange={onChange} placeholder="이름" />
                <input name="nickname" value={nickname} onChange={onChange} placeholder="닉네임" />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default InfoUserReducer;