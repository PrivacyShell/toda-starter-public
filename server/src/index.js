import express from 'express';

import createFile from './lib/services/createTodaFile';
import getAccountFiles from './lib/services/getAccountFiles';
import initiateTransaction from './lib/services/initiateTransaction';

require('dotenv').config();

// Instantiate Express Server
const app = express();

// Set API Header
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Get All Files for Account
app.get('/getAccountFiles/:id', (req, res) => getAccountFiles(req, res));

// Initiate Transaction of File from Sender to Receiver
app.get('/transactions/:sender/:recipient/:file', (req, res) =>
  initiateTransaction(req, res),
);

// Create New File
app.get('/createFile/:type/:owner', (req, res) => createFile(req, res));

// Set Port for Server
const port = process.env.PORT || 4000;

// Start Server
app.listen(port);
console.log(`Listening on port ${port} 🚀`);
