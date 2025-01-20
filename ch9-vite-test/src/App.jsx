import React, { Component } from 'react';
import SassComponent from './components/SassComponent';
import CSSModule from './components/CSSModule';
import StyledComponent from './components/styledComponent';



class App extends Component {
  render() {
    return (
      <div>
        <SassComponent/>
        {/* <CSSModule/> */}
        {/* <StyledComponent /> */}
      </div>
    );
  }
}

export default App;