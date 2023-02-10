const axios = require('axios');
const jwt = require('jsonwebtoken');


const appId = process.env.APP_ID;


const privateKey = process.env.PRIVATE_KEY;


const repo = "SiyaaJhawar/learning-";


const sha = "be836ec";


const url = `https://api.github.com/repos/SiyaaJhawar/learning-/commits/be836ec/statuses`;


const token = jwt.sign({ iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + (10 * 60), iss: appId }, privateKey, { algorithm: 'RS256' });


const headers = {
  "User-Agent": "SiyaaJhawar",
  "Authorization": `Bearer ${token}`,
  "Accept": "application/vnd.github+json"
};


axios.get(url, { headers })
  .then(response => {
  
    const pipelineStatuses = response.data.filter(status => status.context === "ci/pipeline");

   
    console.log(pipelineStatuses);
  })
  .catch(error => {
    console.error(error);
  });






