import React, { Component } from 'react';
import Try from './try';

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for(let i=0; i<4; i+=1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [], // push 쓰면 안됨
  };

  onChange = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { value, result, tries, answer } = this.state;
    e.preventDefault();
    if(value === answer.join('')) {
      this.setState({
        result: '홈런!',
        tries: [...tries, {try: value, result: '홈런!'}],
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9) { // 10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for(let i=0; i<4; i+=1) {
          if(answerArray[i] === answer[i]) {
            strike += 1;
          } else if(answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
        });
      }
    }
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input maxLength={4} value={this.state.value} onChange={this.onChange}></input>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} v={v} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;