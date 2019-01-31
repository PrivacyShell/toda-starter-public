const axios = require('axios');

const sampleId = '0199c335-aed8-4f23-9df7-e63ecb959e6e';

const sampleData = {
  data: {
    attributes: {
      attributes: {
        'is-active': false,
      },
    },
  },
};

const updateInfo = (data, id) => {
  return axios
    .patch(`https://api.todaqfinance.net/accounts/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ADMIN_API_KEY,
      },
    })
    .then(res => console.log(res.data.data))
    .catch(error => console.log(error));
};

export default updateInfo;
