const jwt = require('jsonwebtoken');
const axios = require('axios');

const privateKey = 'SHA256:tzGK/2qqqpwA+RL5vNtRlt+i1WMU/aEWxGJjdWBK/Ow=';
const payload = {
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (10 * 60),
  iss: '281301',
};
const token = jwt.sign(payload, privateKey, { algorithm: 'Base64' });

const headers = {
  Authorization: `Bearer ${token}`,
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

    









