/**
 * Created by morenyang on 2018/7/25.
 */

import React from 'react';

class Control extends React.Component {
  render() {
    return <div>
      <ul>
        <li>
          <label>Saturation: </label>
          <input onChange={this.props.handleChange} name="saturate" type="range" min="0" max="1000"
                 value={this.props.saturate}/>
        </li>

        <li>
          <label>Hue Rotate: </label>
          <input onChange={this.props.handleChange} name="hueRotate" type="range" min="0" max="1000" value={this.props.hueRotate}/>
        </li>

        <li>
          <label>Grayscale: </label>
          <input onChange={this.props.handleChange} name="grayscale" type="range" min="0" max="100" value={this.props.grayscale}/>
        </li>

        <li>
          <label>Sepia: </label>
          <input onChange={this.props.handleChange} name="sepia" type="range" min="0" max="100" value={this.props.sepia}/>
        </li>

        <li>
          <label>Brightness: </label>
          <input onChange={this.props.handleChange} name="brightness" type="range" min="0" max="100" value={this.props.brightness}/>
        </li>

        <li>
          <label>Contrast: </label>
          <input onChange={this.props.handleChange} name="contrast" type="range" min="0" max="1000" value={this.props.contrast}/>
        </li>

      </ul>
    </div>;
  }
}

export default Control;
