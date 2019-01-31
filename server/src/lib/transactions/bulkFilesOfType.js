const axios = require('axios');

const sampleData = {
  data: {
    attributes: {
      quantity: 10,
    },
    relationships: {
      sender: {
        data: {
          type: 'account',
          id: '<sender-account-id>',
        },
      },
      recipient: {
        data: {
          type: 'account',
          id: '<recipient-account-id>',
        },
      },
      'file-type': {
        data: {
          id:
            'fac3bcfd03fdf23ad9a25df0eb713291c0ce63d4b0b22afb8e7c71436d6289f6',
        },
      },
    },
  },
};

const bulkFilesOfType = data => {
  return axios
    .post('https://api.todaqfinance.net/transactions', data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

export default bulkFilesOfType;
