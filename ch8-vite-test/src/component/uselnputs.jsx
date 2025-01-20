import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = (e) => {
        // useReducer에서 제공하는 함수 dispatch
        // reducer 함수에 action 에 e.target 호출함. 
        dispatch(e.target);
    };

    return [state, onChange];
}