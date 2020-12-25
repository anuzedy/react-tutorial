import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import NumberBaseball from '../03/NumberBaseball';
import RSP from '../05/RSP';
import Lotto from '../06/Lotto';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/number-baseball" component={NumberBaseball} />
        <Route path="/rock-scissors-paper" component={RSP} />
        <Route path="/lotto-generator" component={Lotto} />
      </div>
    </BrowserRouter>
  );
};

export default Games;