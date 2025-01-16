import React, { Component } from 'react';

class ScrollBoxEx extends Component {

    //실습 3번 작업1
    //실습 4번 작업1, 추가, backgroundColor : 'blue'
    state = {
        scrollTop: 0, backgroundColor: 'blue',
        scrollHeight: 0, clientHeight: 0
    }

    //실습 3번 작업2
    handleScroll = () => {
        this.setState({
            scrollTop: this.box.scrollTop,
            scrollHeight: this.box.scrollHeight,
            clientHeight: this.box.clientHeight,

        })

        //실습 4번 작업2, 
        // 스크롤의 위치에 따라서, 배경색 지정, 
        // 맨위, 맨아래, 앞의 2가지 경우가 아닐 경우에 따라서, 
        // scrollTop : 스크롤의 위치(0 ~ 350px)
        // scrollHeight : 전체 높이, 650px
        // clientHeight : 현재 div 높이, 300px
        const { scrollTop, scrollHeight, clientHeight } = this.box;
        if (scrollTop === 0) { // 맨위에 
            console.log("맨위에")
            this.setState({ backgroundColor: 'blue' })
        } else if (scrollTop + clientHeight === scrollHeight) { // 맨밑에 
            // } else if (scrollTop === 350) { // 맨밑에 
            console.log("맨밑에")
            this.setState({ backgroundColor: 'red' })
        } else {
            console.log("다른곳")
            this.setState({ backgroundColor: 'green' })
        }
    }

    // 스크롤바를 맨 밑으로 이동해주는 함수.
    scrollToBottom = () => {
        //this.box , ScrollBox 화면을 의미, 고유 속성 
        const { scrollHeight, clientHeight } = this.box;
        /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           scrollHeight : 650px
           clientHeight : 300px
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = scrollHeight - clientHeight;
    };
    scrollToTop = () => {
        const { scrollHeight, clientHeight } = this.box;
        /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = 0;
    };

    scrollToMiddle = () => {
        const { scrollHeight, clientHeight } = this.box;
        /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = 175;
    };
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
            //실습 4번 작업3, 
            backgroundColor: this.state.backgroundColor
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            // background: 'linear-gradient(white, black)'
        };

        return (
            <>
                <div
                    style={style}
                    ref={(ref) => {
                        this.box = ref;
                    }}
                    //실습 3번 작업3
                    onScroll={this.handleScroll}
                >
                    <div style={innerStyle} />
                </div>
                {/* 실습 3번 작업4 */}
                <p>현재 스크롤 위치 scrollTop : {this.state.scrollTop} </p>
                <p>현재 스크롤 위치 scrollHeight : {this.state.scrollHeight} </p>
                <p>현재 스크롤 위치 clientHeight : {this.state.clientHeight} </p>
            </>
        );
    }
}

export default ScrollBoxEx;