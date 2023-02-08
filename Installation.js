const axios = require("axios");

const appId = "281301";

const headers = {
 const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer <jwt_token>`
};

axios.get(`https://api.github.com/app/installations`, {headers})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });





