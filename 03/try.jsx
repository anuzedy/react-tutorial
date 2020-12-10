import React, { PureComponent, memo, useState } from 'react';

// class Try extends PureComponent {
//   constructor(props) {
//     super(props);

//     const filtered = this.props.filter(() => {

//     });
    
//     this.state = {
//       result: this.props.result,
//       try: this.props.try,
//     }
//   }

//   render() {
//     const { v } = this.props;
//     return (
//       <>
//         <li>
//           <div>{v.try}</div>
//           <div>{v.result}</div>
//         </li>
//       </>
//     );
//   }
// }

const Try = memo(({ v }) => {
  // const [result, setResult] = useState(tryInfo.result);

  // const onClick = () => {
  //   setResult('1');
  // } // props를 자식에서 변경하고 싶으면 state로 만들어야함

  return (
    <>
      <li>
        <div>{v.try}</div>
        <div>{v.result}</div>
      </li>
    </>
  );
});

export default Try;