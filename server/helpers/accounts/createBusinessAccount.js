const axios = require('axios');

const sampleData = {
  type: 'account',
  data: {
    attributes: {
      'account-type': 'business',
      'admin-email': 'hyrum.graff@battleschool.gov',
      'business-type': 'sole-proprietorship',
      'business-number': '12345',
      'business-contact': {
        name: 'Battle School',
        email: 'hyrum.graff@battleschool.gov',
        phone: '9055552328',
        address: {
          'street-address-1': '1 shaw street',
          'street-address-2': '',
          city: 'toronto',
          'province-region': 'on',
          'postal-code': 'm6k0a1',
          country: 'ca',
        },
      },
      contact: {
        'first-name': 'Hyrum',
        'last-name': 'Graff',
        email: 'hyrum.graff@battleschool.gov',
        phone: '4165554590',
        address: {
          'street-address-1': '25 madison',
          'street-address-2': '2',
          city: 'hamilton',
          'province-region': 'on',
          'postal-code': 'l5m6v4',
          country: 'ca',
        },
      },
    },
  },
};

const createBusinessAccount = (data) => {
  axios
    .post('https://api.todaqfinance.net/accounts', data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ADMIN_API_KEY,
      },
    })
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

export default createBusinessAccount;
