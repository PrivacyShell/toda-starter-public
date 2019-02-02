const axios = require('axios');

const sampleId = 'cfced8db-c087-4520-80af-8bfeae715c16';

const getFiles = id => {
  return axios
    .get(`https://api.todaqfinance.net/files/${id}/files?page=1&limit=100`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
    .then(res => console.log(res.data.data))
    .catch(error => console.log(error));
};

export default getFiles;
