import { createContext, useState } from 'react';

// 전역 설정, 
// const ColorContext = createContext({ color: 'red' });/
const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { },
    },
});

//ColorProvider, 함수형 컴포넌트로 정의. 
const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor },
    };

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
};
// `ColorConsumer`는 `ColorContext.Consumer`와 동일
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;