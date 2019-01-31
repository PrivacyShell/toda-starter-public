import React, { Fragment } from 'react';
import axios from 'axios';

import AliceBob from './AliceBob';
import GlobalStyle from '../shared/styles/GlobalStyle';

const url = 'http://localhost:4000';

const App = () => {
  const createFile = (type, person) => {
    // make call then update data
    axios.get(`${url}/createFile/${type}/${person}`).then(res => console.log(res));
    // after creating file update list
    // return updateData;
  };

  return (
    <Fragment>
      <AliceBob createFile={createFile} />
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
