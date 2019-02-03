import PropTypes from 'prop-types';
import React from 'react';

import Container from './Container';
import Column from './Column';
import TopColumn from './TopColumn';
import Transactions from './Transactions';

import { BobID, AliceID } from '../../shared/constants/id';

const Users = ({
  aliceFiles, bobFiles, createFile, sendFile, setAliceFiles, setBobFiles,
}) => (
  <Container>
    <Column>
      <TopColumn
        setAliceFiles={setAliceFiles}
        setBobFiles={setBobFiles}
        createFile={createFile}
        id={AliceID}
        name="Alice"
        type="Apple"
      />
      <Transactions files={aliceFiles} receiver={BobID} sender={AliceID} sendFile={sendFile} />
    </Column>
    <Column>
      <TopColumn
        setAliceFiles={setAliceFiles}
        setBobFiles={setBobFiles}
        createFile={createFile}
        id={BobID}
        name="Bob"
        type="Orange"
      />
      <Transactions bob files={bobFiles} receiver={AliceID} sender={BobID} sendFile={sendFile} />
    </Column>
  </Container>
);

Users.propTypes = {
  aliceFiles: PropTypes.array,
  bobFiles: PropTypes.array,
  createFile: PropTypes.func,
  sendFile: PropTypes.func,
  setAliceFiles: PropTypes.func,
  setBobFiles: PropTypes.func,
};

Users.defaultProps = {
  aliceFiles: [],
  bobFiles: [],
  createFile: () => {},
  sendFile: () => {},
  setAliceFiles: () => {},
  setBobFiles: () => {},
};

export default Users;
