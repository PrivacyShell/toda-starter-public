const axios = require('axios');

const listFiles = () => {
  return axios
    .get('https://api.todaqfinance.net/files?page=1&limit=100', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
    .then(res => console.log(res.data.data))
    .catch(error => console.log(error));
};

export default listFiles;
