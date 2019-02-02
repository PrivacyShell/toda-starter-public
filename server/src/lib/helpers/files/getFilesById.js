const axios = require('axios');

const sampleId =
  '732c13b30c60a466728468e3d77f3a1c5fb75f3071d5d16b5dafb2a1e03adf75';

const getFilesById = id => {
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

export default getFilesById;
