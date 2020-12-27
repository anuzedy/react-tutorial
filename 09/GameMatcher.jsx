import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NumberBaseball from '../03/NumberBaseball';
import RSP from '../05/RSP';
import Lotto from '../06/Lotto';

class GameMatcher extends Component {
  render() {
    if(this.props.match.params.name === 'NumberBaseball') {
      return <NumberBaseball />;
    } else if(this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />;
    } else if(this.props.match.params.name === 'lotto-generator') {
      return <Lotto />;
    }
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
}

export default GameMatcher;