const axios = require("axios");



const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ***`
};

axios.get(installation/repositories, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });





