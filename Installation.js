
const axios = require('axios');
const fs = require("fs");

const appId = '281301';

const privateKey = fs.readFileSync("private_key.pem","utf8");

const installationId = '1';

async function getInstallationToken() {
  const jwt = require('jsonwebtoken');
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + (10 * 60),
    iss: appId
  };
  const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

  axios.get(`https://api.github.com/app/installations/${installationId}/access_tokens`, { headers })
  .then(response => {
    console.log(response.data.token);
  })
  .catch(error => {
    console.error(error);
  });
