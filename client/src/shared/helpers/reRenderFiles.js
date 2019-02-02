import { BobID, AliceID } from '../constants/id';

import getAccountFiles from './getAccountFiles';

const reRenderFiles = (setAliceFiles, setBobFiles) => {
  const initialBobFiles = () => getAccountFiles(BobID, setAliceFiles, setBobFiles);
  const initialAliceFiles = () => getAccountFiles(AliceID, setAliceFiles, setBobFiles);

  setBobFiles(initialBobFiles);
  setAliceFiles(initialAliceFiles);
};

export default reRenderFiles;
