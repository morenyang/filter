/**
 * Created by morenyang on 2018/7/25.
 */

import React from 'react';
import Photo from './Photo';
import Control from './Control';

class App extends React.Component {
  state = {
    brightness: 1,
    contrast: 1,
    grayscale: 0,
    hueRotate: 0,
    opacity: 1,
    saturate: 1,
    sepia: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Photo {...this.state}/>
        <Control {...this.state} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
