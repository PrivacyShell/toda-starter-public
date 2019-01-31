import express from 'express';
import getAccounts from './lib/accounts/getAccounts';
import getAccountFiles from './lib/accounts/getFilesByAccount';

require('dotenv').config();

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/getAccounts', (req, res) => {
  const accounts = getAccounts();
  accounts.then(json => res.send(json));
});

app.get('/getAccountFiles/:id', (req, res) => {
  const id = req.params.id;
  const files = getAccountFiles(id);

  files.then(json => res.send(json));
});

const port = process.env.PORT || 4000;

app.listen(port);
console.log(`Listening on port ${port} 🚀`);
