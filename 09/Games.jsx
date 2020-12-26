import React from 'react';
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom';
import NumberBaseball from '../03/NumberBaseball';
import RSP from '../05/RSP';
import Lotto from '../06/Lotto';

const Games = () => {
  return (
    <HashRouter>
      <div>
        <Link to="/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/lotto-generator">로또생성기</Link>
      </div>
      <div>
        <Route path="/number-baseball" component={NumberBaseball} />
        <Route path="/rock-scissors-paper" component={RSP} />
        <Route path="/lotto-generator" component={Lotto} />
      </div>
    </HashRouter>
  );
};

export default Games;