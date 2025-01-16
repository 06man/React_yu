import React, { Component } from 'react';

class RefSample extends Component {
    //작업1
    input = React.createRef();

    // 작업3, 접근 하고 싶은 요소를 선택해서 추가 작업. 
    handleFocus = () => {
        this.input.current.focus();
    };

    render() {
        return (
            <div>
                {/* 작업 2, 접근 하고 싶은 요소에 ref 달기. */}
                <input ref={this.input} />
                <button onClick={this.handleFocus}>Focus Input</button>
            </div>
        );
    }
}

export default RefSample;