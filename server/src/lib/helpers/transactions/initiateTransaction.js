const axios = require("axios");

const sampleData = {
  data: {
    relationships: {
      sender: {
        data: {
          type: "account",
          id: "47b60873-9e94-49f4-9fc1-d05eacde441f",
        },
      },
      recipient: {
        data: {
          type: "account",
          id: "51da5aa2-1a44-47a2-b05d-e54299825884",
        },
      },
      files: {
        data: [
          {
            type: "file",
            id:
              "d5a29e7681bca6c90a08f3c4fb00cd358364a9b65ecab7892dfc17d557890d7c",
          },
        ],
      },
    },
  },
};

const initiateTransaction = data => {
  return axios
    .post("https://api.todaqfinance.net/transactions", data, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
    })
    .then(res => res.data.data)
    .catch(error => console.log(error));
};

export default initiateTransaction;
