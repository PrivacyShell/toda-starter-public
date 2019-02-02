const axios = require('axios');

const sampleData = {
  data: {
    type: 'file',
    attributes: {
      payload: {
        id: '1a3c1e04-ab62-4c44-b4a3-873f5d50c07d',
        type: 'loyalty-token',
        'member-type': 'gold',
      },
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
    .then(res => res.data.data)
    .catch(error => console.log(error));
};

export default createFile;
