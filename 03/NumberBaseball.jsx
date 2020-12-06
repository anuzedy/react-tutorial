import React, { Component } from 'react';

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

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input maxLength={4} value={this.state.value} onChange={this.onChange} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {['like', 'like', 'like', 'like'].map((v) => {
            return (
              <li>{v}</li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;