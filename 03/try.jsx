import React, { Component } from 'react';

class Try extends Component {
  render() {
    return (
      <li>
        <div>{this.props.v.try}</div>
        <div>{this.props.v.result}</div>
      </li>
    );
  }
}

export default Try;