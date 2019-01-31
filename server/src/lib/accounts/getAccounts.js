import axios from 'axios';

const getAccounts = () => {
  return axios
    .get(
      'https://api.todaqfinance.net/accounts?filter[active]=true&page=1&limit=100',
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.API_KEY,
        },
      },
    )
    .then(res => res.data.data)
    .catch(error => console.log(error));
};

export default getAccounts;
