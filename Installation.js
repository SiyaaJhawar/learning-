const axios = require("axios");

const url=https://api.github.com/app/installations

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





