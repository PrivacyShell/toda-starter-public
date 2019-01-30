import React from 'react';

import AliceList from './Alice/AliceList';
import GlobalStyle from '../shared/styles/GlobalStyle';
import Grid from '../shared/styles/Grid';

const App = () => (
  <Grid>
    <div>
      <h1>Alice</h1>
      <AliceList />
    </div>
    <div>
      <h1>Bob</h1>
    </div>
    <GlobalStyle />
  </Grid>
);

export default App;
