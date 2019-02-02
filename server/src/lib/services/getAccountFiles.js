import getFilesByAccount from '../helpers/accounts/getFilesByAccount';

const getAccountFiles = (req, res) => {
  const { id } = req.params;
  const files = getFilesByAccount(id);

  files.then(json => res.send(json));
};

export default getAccountFiles;
