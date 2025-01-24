import ColorContext, { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    return (
        // 방법1,
        // 전역에 있는 특정의 값을 가져오기
        // <ColorContext.Consumer>
        //     {/* value -> { color: 'black' } */}
        //     {value => (
        //         <div
        //             style={{
        //                 width: '64px',
        //                 height: '64px',
        //                 background: value.color,
        //             }}
        //         />
        //     )}
        // </ColorContext.Consumer>

        // 방법2 
        <ColorConsumer>
            {value => (
                <>
                    <div
                        style={{
                            width: '100px',
                            height: '100px',
                            // background: value.state.color,
                            backgroundColor:'red'
                        }}
                    />
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor:'blue'
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;