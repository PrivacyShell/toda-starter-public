import React from 'react';

import Container from './Container';
import Column from './Column';
import ColumnTop from './ColumnTop';
import GenerateFileButton from './GenerateFileButton';
import TransactionList from './TransactionList';
import Transaction from './Transaction';

const AliceBob = () => (
  <Container>
    <Column>
      <ColumnTop>
        <span role="img" aria-label="Alice" />
        <h2>Alice</h2>
        <GenerateFileButton>Create an Apple</GenerateFileButton>
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
        <GenerateFileButton>Create an Orange</GenerateFileButton>
      </ColumnTop>
      <TransactionList>
        <Transaction className="bob">Halo</Transaction>
        <Transaction className="bob">Wie gehts?</Transaction>
      </TransactionList>
    </Column>
  </Container>
);

export default AliceBob;
