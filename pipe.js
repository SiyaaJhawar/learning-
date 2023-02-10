const axios = require('axios');
const jwt = require('jsonwebtoken');


const secrets = JSON.parse(process.env.SECRET_KEY);


const repo = "SiyaaJhawar/learning-";


const sha = "be836ec";


const url = `https://api.github.com/repos/SiyaaJhawar/learning-/commits//statuses`;


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






