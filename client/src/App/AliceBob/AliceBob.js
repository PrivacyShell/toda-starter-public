import React from 'react';
import axios from 'axios';

import Container from './Container';
import Column from './Column';
import ColumnTop from './ColumnTop';
import GenerateFileButton from './GenerateFileButton';
import TransactionList from './TransactionList';
import Transaction from './Transaction';

const AliceID = '7af1b55f-792a-467a-8fe5-621b7b8523dc';
const BobID = 'ff67f90d-1e53-4060-b67b-80fd94f3a522';

const AliceBob = ({ createFile }) => (
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
        <Transaction>Halo</Transaction>
        <Transaction>Wie gehts?</Transaction>
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
        <Transaction className="bob">Halo</Transaction>
        <Transaction className="bob">Wie gehts?</Transaction>
      </TransactionList>
    </Column>
  </Container>
);

export default AliceBob;
