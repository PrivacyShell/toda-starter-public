import axios from 'axios';

import getAccountFiles from './getAccountFiles';
import url from '../constants/url';

const createFile = (type, personId, setAliceFiles, setBobFiles) => {
  axios.get(`${url}/createFile/${type}/${personId}`).then(() => getAccountFiles(personId, setAliceFiles, setBobFiles));
};

export default createFile;
