const axios = require('axios');

const sampleData = {
  data: {
    type: 'file',
    attributes: {
      quantity: 10,
    },
    relationships: {
      'initial-account': {
        data: {
          type: 'account',
          id: '<account-id>',
        },
      },
      'file-type': {
        data: {
          id: '<file-type-id>',
        },
      },
    },
  },
};

const createFile = data => {
  return axios
    .post('https://api.todaqfinance.net/files', data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

export default createFile;
