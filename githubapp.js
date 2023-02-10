const jwt = require('jsonwebtoken');
const axios = require('axios');
const fs = require("fs");
const privateKey = fs.readFileSync("private_key.pem","utf8");
const appId = 281301
const installation_id=1

const header = {
    alg: "RS256",
    typ: "JWT"
};

const payload = {
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (10 * 60),
  iss:  appId
  
};
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', header: header } );

const headers = {
  Authorization: `Bearer ***`,
  'User-Agent': 'SiyaaJhawar',
};

axios
  .post('https://api.github.com/repos/SiyaaJhawar/learning-/issues', {
    title: 'Hi',
    body: 'This is a sample code',
  }, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });



