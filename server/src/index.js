import express from "express";
import createFile from "./lib/files/createFile";
import getAccounts from "./lib/accounts/getAccounts";
import getAccountFiles from "./lib/accounts/getFilesByAccount";
import initiateTransaction from "./lib/transactions/initiateTransaction";
import uniqid from "uniqid";

require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.get("/getAccounts", (req, res) => {
  const accounts = getAccounts();
  accounts.then(json => res.send(json));
});

app.get("/getAccountFiles/:id", (req, res) => {
  const { id } = req.params;
  const files = getAccountFiles(id);

  files.then(json => res.send(json));
});

app.get("/transactions/:sender/:recipient/:files", (req, res) => {
  const { sender, recipient, files } = req.params;

  const data = {
    data: {
      relationships: {
        sender: {
          data: {
            type: "account",
            id: sender,
          },
        },
        recipient: {
          data: {
            type: "account",
            id: recipient,
          },
        },
        files: {
          data: [
            {
              type: "file",
              id: files,
            },
          ],
        },
      },
    },
  };

  const transaction = initiateTransaction(data);
  transaction.then(json => res.send(json));
});

app.get("/createFile/:type/:owner", (req, res) => {
  const { owner, type } = req.params;

  const data = {
    data: {
      type: "file",
      attributes: {
        payload: {
          id: uniqid(),
          type: type,
        },
      },
      relationships: {
        "initial-account": {
          data: {
            type: "account",
            id: owner,
          },
        },
        "file-type": {
          data: {
            id: "0",
          },
        },
      },
    },
  };

  const file = createFile(data);

  file.then(json => res.send(json));
});

const port = process.env.PORT || 4000;

app.listen(port);
console.log(`Listening on port ${port} 🚀`);
