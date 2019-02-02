import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import AliceBob from './AliceBob';
import GlobalStyle from '../shared/styles/GlobalStyle';

import { BobID, AliceID } from '../shared/Constants';

const url = 'http://localhost:4000';

const App = () => {
  const [aliceFiles, setAliceFiles] = useState([]);
  const [bobFiles, setBobFiles] = useState([]);

  const getAccountFiles = id => axios
    .get(`${url}/getAccountFiles/${id}`)
    .then(res => (id === AliceID ? setAliceFiles(res) : setBobFiles(res)));

  const createFile = (type, personId) => axios.get(`${url}/createFile/${type}/${personId}`).then(() => getAccountFiles(personId));

  const reRenderFiles = () => {
    const initialBobFiles = () => getAccountFiles(BobID);
    const initialAliceFiles = () => getAccountFiles(AliceID);

    setBobFiles(initialBobFiles);
    setAliceFiles(initialAliceFiles);
  };

  const sendFile = (sender, recipient, files) => axios.get(`${url}/transactions/${sender}/${recipient}/${files}`).then(() => reRenderFiles());

  useEffect(() => reRenderFiles(), []);

  return (
    <Fragment>
      <AliceBob
        createFile={createFile}
        bobFiles={bobFiles}
        aliceFiles={aliceFiles}
        sendFile={sendFile}
      />
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
