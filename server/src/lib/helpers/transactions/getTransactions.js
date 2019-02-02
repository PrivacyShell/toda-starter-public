const axios = require('axios');

const getTransactions = () => {
  return axios
    .get('https://api.todaqfinance.net/transactions', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
    .then(res => console.log(res.data.data))
    .catch(error => console.log(error));
};

export default getTransactions;
