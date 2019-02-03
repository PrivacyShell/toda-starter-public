import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

import createFile from '../shared/helpers/createFile';
import GlobalStyle from '../shared/styles/GlobalStyle';
import reRenderFiles from '../shared/helpers/reRenderFiles';
import url from '../shared/constants/url';

import Users from './Users';

const App = () => {
  const [aliceFiles, setAliceFiles] = useState([]);
  const [bobFiles, setBobFiles] = useState([]);

  const sendFile = (sender, recipient, files) => {
    axios
      .get(`${url}/transactions/${sender}/${recipient}/${files}`)
      .then(() => reRenderFiles(setAliceFiles, setBobFiles));
  };

  useEffect(() => reRenderFiles(setAliceFiles, setBobFiles), []);

  return (
    <Fragment>
      <Users
        createFile={createFile}
        bobFiles={bobFiles}
        aliceFiles={aliceFiles}
        sendFile={sendFile}
        setBobFiles={setBobFiles}
        setAliceFiles={setAliceFiles}
      />
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
