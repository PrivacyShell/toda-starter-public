import initiateTransaction from '../helpers/transactions/initiateTransaction';

const transaction = (req, res) => {
  const { sender, recipient, file } = req.params;

  const data = {
    data: {
      relationships: {
        sender: {
          data: {
            type: 'account',
            id: sender,
          },
        },
        recipient: {
          data: {
            type: 'account',
            id: recipient,
          },
        },
        files: {
          data: [
            {
              type: 'file',
              id: file,
            },
          ],
        },
      },
    },
  };

  const transaction = initiateTransaction(data);
  transaction.then(json => res.send(json));
};

export default transaction;
