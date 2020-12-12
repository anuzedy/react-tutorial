import React, { Component } from 'react';

// 클래스의 경우 -> constructor -> render -> ref => componentDidMount
//              -> (setState/props 바뀔때 -> shouldComponentUpdate가 true면 -> render -> componentDidUpdate)
//              -> 부도가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
  바위: '0',
  가위: '-147px',
  보: '-284px',
}

const scores = {
  승리: 1,
  무승부: 0,
  패배: -1,
}

class RSP extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  };

  interval;

  componentDidMount() { // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 함
    this.interval = setInterval(() => {
      const {imgCoord} = this.state;
      if(imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위,
        });
      } else if(imgCoord === rspCoords.가위) {
        this.setState({
          imgCoord: rspCoords.보,
        });
      } else if(imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위,
        });
      }
    }, 1000);
  }

  componentDidUpdate() {  // 리렌더링 후

  }

  componentWillUnmount() {  // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 함
    clearInterval(this.interval);
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