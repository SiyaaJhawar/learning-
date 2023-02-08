const axios = require("axios");

const appId = "281301";



axios.get(`https://api.github.com/app/installations`, {})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });





