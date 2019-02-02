import uniqid from 'uniqid';

import createFile from '../helpers/files/createFile';

const createTodaFile = (req, res) => {
  const { owner, type } = req.params;

  const data = {
    data: {
      type: 'file',
      attributes: {
        payload: {
          id: uniqid(),
          type: type,
        },
      },
      relationships: {
        'initial-account': {
          data: {
            type: 'account',
            id: owner,
          },
        },
        'file-type': {
          data: {
            id: '0',
          },
        },
      },
    },
  };

  const file = createFile(data);

  file.then(json => res.send(json));
};

export default createTodaFile;
