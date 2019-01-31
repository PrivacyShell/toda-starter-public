const axios = require('axios');

const sampleData = {
  type: 'account',
  data: {
    attributes: {
      'account-type': 'individual',
      'admin-email': 'peter.wiggen@hegemon.org',
      contact: {
        email: 'peter.wiggen@hegemon.org',
        phone: '555-555-5323',
        'last-name': 'Wiggen',
        'first-name': 'Peter',
        address: {
          city: 'Toronto',
          'postal-code': 'N4N2L1',
          'province-region': 'Ontario',
          'street-address-1': '925 Madison Avenue',
          country: 'CA',
        },
      },
    },
  },
};

const createIndividualAccount = data => {
  return axios
    .post('https://api.todaqfinance.net/accounts', data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ADMIN_API_KEY,
      },
    })
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

export default createIndividualAccount;
