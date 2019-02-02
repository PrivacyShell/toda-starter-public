import axios from 'axios';

import { AliceID } from '../constants/id';
import url from '../constants/url';

const getAccountFiles = (id, setAliceFiles, setBobFiles) => axios
  .get(`${url}/getAccountFiles/${id}`)
  .then(res => (id === AliceID ? setAliceFiles(res) : setBobFiles(res)));

export default getAccountFiles;
