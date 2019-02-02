import PropTypes from 'prop-types';
import React from 'react';

import Transaction from './Transaction';
import TransactionList from './TransactionList';

const Transactions = ({
  bob, files, receiver, sender, sendFile,
}) => (
  <TransactionList>
    {files.data && Array.isArray(files.data) ? (
      files.data.map((file) => {
        const { id, type } = file.attributes.payload;
        const todaId = file.id;

        return (
          <Transaction
            key={`${id}-alice`}
            onClick={() => sendFile(sender, receiver, todaId)}
            className={bob ? 'bob' : ''}
          >
            ID: {id}, type: {type}
          </Transaction>
        );
      })
    ) : (
      <p>Loading...</p>
    )}
  </TransactionList>
);

Transactions.propTypes = {
  bob: PropTypes.string,
  files: PropTypes.array,
  receiver: PropTypes.string,
  sender: PropTypes.string,
  sendFile: PropTypes.func,
};

Transactions.defaultProps = {
  bob: '',
  files: [],
  receiver: '',
  sender: '',
  sendFile: () => {},
};

export default Transactions;
