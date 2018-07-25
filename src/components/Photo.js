/**
 * Created by morenyang on 2018/7/25.
 */

import React from 'react';
import convertToFilterStyle from '../utils/convert';

class Photo extends React.Component {
  state = { style: convertToFilterStyle(this.props) };

  static getDerivedStateFromProps(nextProps) {
    return { style: convertToFilterStyle(nextProps) };
  }

  render() {
    return <div>
      <img src="https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg"
           style={{ maxHeight: '100vh', filter: this.state.style }}/>
    </div>;
  }
}

export default Photo;
