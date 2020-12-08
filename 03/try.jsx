import React, { Component } from 'react';

const Try = ({ v }) => {
  return (
    <>
      <li>
        <div>{v.try}</div>
        <div>{v.result}</div>
      </li>
    </>
  );
}

export default Try;