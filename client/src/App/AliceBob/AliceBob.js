import React from 'react';

import Container from './Container';
import Column from './Column';
import ColumnTop from './ColumnTop';
import GenerateFileButton from './GenerateFileButton';
import TransactionList from './TransactionList';
import Transaction from './Transaction';

import { BobID, AliceID } from '../../shared/Constants';

const AliceBob = ({
  createFile, aliceFiles, bobFiles, sendFile,
}) => (
  <Container>
    <Column>
      <ColumnTop>
        <span role="img" aria-label="Alice" />
        <h2>Alice</h2>
        <GenerateFileButton onClick={() => createFile('Apple', AliceID)}>
          Create an Apple
        </GenerateFileButton>
      </ColumnTop>
      <TransactionList>
        {aliceFiles.data && Array.isArray(aliceFiles.data) ? (
          aliceFiles.data.map((file, i) => {
            const { id, type } = file.attributes.payload;
            const todaId = file.id;
            console.log(AliceID, BobID, todaId);
            return (
              <Transaction key={id + i} onClick={() => sendFile(AliceID, BobID, todaId)}>
                ID: {id}, type: {type}
              </Transaction>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </TransactionList>
    </Column>
    <Column>
      <ColumnTop>
        <span role="img" aria-label="Bob" />
        <h2>Bob</h2>
        <GenerateFileButton onClick={() => createFile('Orange', BobID)}>
          Create an Orange
        </GenerateFileButton>
      </ColumnTop>
      <TransactionList>
        {bobFiles.data && Array.isArray(bobFiles.data) ? (
          bobFiles.data.map((file, i) => {
            const { id, type } = file.attributes.payload;
            const todaId = file.id;
            return (
              <Transaction
                className="bob"
                key={`${id + i}bob`}
                onClick={() => sendFile(BobID, AliceID, todaId)}
              >
                ID: {id}, type: {type}
              </Transaction>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </TransactionList>
    </Column>
  </Container>
);

export default AliceBob;
