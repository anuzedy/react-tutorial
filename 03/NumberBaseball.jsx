import React, { Component } from 'react';
import Try from './try';

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onChange = (e) => {

  };

  onSubmit = (e) => {

  };

  fruits = [
    { fruit: '사과', taste: '맛있다'}, 
    { fruit: '바나나', taste: '맛없다'}, 
    { fruit: '포도', taste: '시다'}, 
    { fruit: '귤', taste: '떫다'}
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input maxLength={4} value={this.state.value} onChange={this.onChange}></input>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v, i) => {
            return (
              <Try key={v.fruit} v={v} i={i} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;