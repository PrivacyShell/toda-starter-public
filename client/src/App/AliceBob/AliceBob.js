import React from 'react';

import Container from './Container';
import Column from './Column';
import ColumnTop from './ColumnTop';
import GenerateFileButton from './GenerateFileButton';
import TransactionList from './TransactionList';
import Transaction from './Transaction';

import { BobID, AliceID } from '../../shared/Constants';

const AliceBob = ({ createFile, aliceFiles, bobFiles }) => (
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
        {aliceFiles.data ? (
          aliceFiles.data.map((file) => {
            const { id, type } = file.attributes.payload;
            return (
              <Transaction key={id}>
                ID: {id}, type: {type}
              </Transaction>
            );
          })
        ) : (
          <p>loading bruh</p>
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
        {bobFiles.data ? (
          bobFiles.data.map((file) => {
            const { id, type } = file.attributes.payload;
            return (
              <Transaction className="bob" key={`${id}bob`}>
                ID: {id}, type: {type}
              </Transaction>
            );
          })
        ) : (
          <p>loading bruh</p>
        )}
      </TransactionList>
    </Column>
  </Container>
);

export default AliceBob;
