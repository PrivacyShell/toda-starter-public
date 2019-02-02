import axios from 'axios';

import getAccountFiles from './getAccountFiles';
import url from '../constants/url';

const createFile = (type, personId) => {
  axios.get(`${url}/createFile/${type}/${personId}`).then(() => getAccountFiles(personId));
};

export default createFile;
