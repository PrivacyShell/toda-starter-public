const axios = require('axios');

const sampleId = '2e5aac45-4bc5-4202-9cc8-6e0998b8baac';

const getAccountById = id => {
  return axios
    .get(`https://api.todaqfinance.net/accounts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
    .then(res => console.log(res.data.data))
    .catch(error => console.log(error));
};

export default getAccountById;
