import React, { Component } from 'react';

// 클래스의 경우 -> constructor -> render -> ref => componentDidMount
//              -> (setState/props 바뀔때 -> shouldComponentUpdate가 true면 -> render -> componentDidUpdate)
//              -> 부도가 나를 없앴을 때 -> componentWillUnmount -> 소멸

class RSP extends Component {
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  };

  componentDidMount() { // 컴포넌트가 첫 렌더링된 후

  }

  componentDidUpdate() {  // 리렌더링 후

  }

  componentWillUnmount() {  // 컴포넌트가 제거되기 직전

  }

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
      </>
    );
  }
}

export default RSP;