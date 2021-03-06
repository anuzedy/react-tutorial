import React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Switch } from 'react-router-dom';
import NumberBaseball from '../03/NumberBaseball';
import RSP from '../05/RSP';
import Lotto from '../06/Lotto';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        <Switch>
        {/* <Route path="/game/:name" component={() => <GameMatcher props="123456" />} /> */}
          <Route exact path="/" render={(props) => <GameMatcher {...props} />} />
          <Route path="/game/number-baseball" render={(props) => <GameMatcher {...props} />} />
          <Route path="/game/number-baseball" render={(props) => <GameMatcher {...props} />} />
          <Route path="/game/number-baseball" render={(props) => <GameMatcher {...props} />} />
          <Route path="/game/number-baseball" render={(props) => <GameMatcher {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;