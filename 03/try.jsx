import React, { Component } from 'react';

class Try extends Component {
  render() {
    const { v } = this.props;
    return (
      <li>
        <div>{v.try}</div>
        <div>{v.result}</div>
      </li>
    );
  }
}

export default Try;