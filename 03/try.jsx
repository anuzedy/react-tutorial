import React, { PureComponent, memo } from 'react';

// class Try extends PureComponent {
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