const jwt = require('jsonwebtoken');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const appId = process.env.APP_ID;

const payload = {
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (10 * 60),
  iss: appId,
};
const token = jwt.sign(payload, privateKey, { algorithm: 'HS256' });

const headers = {
  Authorization: `Bearer ${token}`,
  'User-Agent': 'SiyaaJhawar',
};

axios
  .get('https://api.github.com/repos/SiyaaJhawar/learning-/issues', {
    title: 'Hi',
    body: 'This is a sample code',
  }, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });



