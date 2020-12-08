import React, { useState, memo } from 'react';
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

const NumberBaseball = memo(() => {
  // result: '',
  // value: '',
  // answer: getNumbers(),
  // tries: [], // push 쓰면 안됨
  const [ result, setResult ] = useState('');
  const [ value, setValue ] = useState('');
  const [ answer, setAnswer ] = useState(getNumbers());
  const [ tries, setTries ] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(value === answer.join('')) {
      setResult('홈런!');
      setTries((prevTries) => [...prevTries, {try: value, result: '홈런!'}]);

      alert('게임을 다시 시작합니다!');

      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9) { // 10번 이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for(let i=0; i<4; i+=1) {
          if(answerArray[i] === answer[i]) {
            strike += 1;
          } else if(answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setValue('');
        setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}]);
      }
    }
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input maxLength={4} value={value} onChange={onChange}></input>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try key={`${i + 1}차 시도 :`} v={v} />
          );
        })}
      </ul>
    </>
  );
});

// class NumberBaseball extends Component {
//   state = {
//     result: '',
//     value: '',
//     answer: getNumbers(),
//     tries: [], // push 쓰면 안됨
//   };

//   onChange = (e) => {
//     console.log(this.state.answer);
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   onSubmit = (e) => {
//     const { value, result, tries, answer } = this.state;
//     e.preventDefault();
//     if(value === answer.join('')) {
//       this.setState((prevState) => {
//         return {
//           result: '홈런!',
//           tries: [...prevState.tries, {try: value, result: '홈런!'}],
//         }
//       });
//       alert('게임을 다시 시작합니다!');
//       this.setState({
//         value: '',
//         answer: getNumbers(),
//         tries: [],
//       });
//     } else {
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if(tries.length >= 9) { // 10번 이상 틀렸을 때
//         this.setState({
//           result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
//         });
//         alert('게임을 다시 시작합니다!');
//         this.setState({
//           value: '',
//           answer: getNumbers(),
//           tries: [],
//         });
//       } else {
//         for(let i=0; i<4; i+=1) {
//           if(answerArray[i] === answer[i]) {
//             strike += 1;
//           } else if(answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         this.setState((prevState) => {
//           return {
//             tries: [...prevState.tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
//           }
//         });
//       }
//     }
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.result}</h1>
//         <form onSubmit={this.onSubmit}>
//           <input maxLength={4} value={this.state.value} onChange={this.onChange}></input>
//         </form>
//         <div>시도: {this.state.tries.length}</div>
//         <ul>
//           {this.state.tries.map((v, i) => {
//             return (
//               <Try key={`${i + 1}차 시도 :`} v={v} />
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }

export default NumberBaseball;