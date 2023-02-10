const axios = require("axios");

const url=https://api.github.com/repositories/installations/281301

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ***`
};

axios.get(url, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });





