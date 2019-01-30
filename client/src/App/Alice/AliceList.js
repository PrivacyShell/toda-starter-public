import axios from 'axios';
import React, { Fragment } from 'react';

// import getFiles from '../../shared/helpers/accounts/getFilesByAccount';

const id = '7af1b55f-792a-467a-8fe5-621b7b8523dc';

axios.get('http://localhost:4000/getAccounts').then(res => console.log(res));

const AliceList = () => (
  <Fragment>
    <p>list</p>
  </Fragment>
);
export default AliceList;
