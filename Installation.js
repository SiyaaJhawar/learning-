
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

  const response = await axios({
    method: 'post',
    url: `https://api.github.com/app/installations/1/access_tokens`,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`
    }
  });

  return response.data.token;
}

getInstallationToken().then(token => {
  console.log(token);
});
