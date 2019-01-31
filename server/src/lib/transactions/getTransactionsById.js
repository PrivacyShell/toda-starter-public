const axios = require('axios');

const sampleId = 'd7fef452-edd0-44c5-8bfa-1a36bcc30dc075';

const getTransactionsById = id => {
  return axios
    .get(`https://api.todaqfinance.net/transactions/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
    .then(res => console.log(res.data.data))
    .catch(error => console.log(error));
};

export default getTransactionsById;
