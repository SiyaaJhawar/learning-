const jwt = require('jsonwebtoken');
const axios = require('axios');

const privateKey = 'SHA256:tNMsW3nOASQbbaPQb/gJq4KUlwdrP4GPe+hpakZxx1w=';
const payload = {
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (10 * 60),
  iss: '281301',
};
const token = jwt.sign(payload, privateKey, { algorithm: 'HS256' });

const headers = {
  Authorization: `Bearer ${token}`,
  'User-Agent': 'SiyaaJhawar',
};

axios
  .Get('https://api.github.com/repos/SiyaaJhawar/learning-/issues', {
    title: 'Hi',
    body: 'This is a sample code',
  }, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });






