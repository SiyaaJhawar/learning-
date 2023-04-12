
//const btoa = require('btoa');
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
import axios from 'axios';
import fetch from 'node-fetch';




 
//var xhr = new XMLHttpRequest();


const githubUrl = 'https://api.github.com/repos/SiyaaJhawar/action/commits/7ba17fe7086423a30485d2949cf32255bc2c479d/comments';
const jiraUsername = process.env.JIRA_USERNAME;
const jiraapitoken = process.env.JIRA_API_TOKEN;
const username = process.env.GITHUB_USERNAME;
const password = process.env.GITHUB_API_TOKEN;

const defectRegex = /([A-Z]{1}[A-Z]{2,})-\d+/g;

async function compareCommitCommentWithJiraIssue() {
  try {
   const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');
const commitsResponse = await axios.get(githubUrl, {
  headers: {
    "Authorization": `Basic ${encodedCredentials}`,
    "Accept": "application/json"
  }
});

    const commentTexts = commitsResponse.data.map(comment => comment.body);
    const defectIds = commentTexts.flatMap(text => text.match(defectRegex));
    console.log(`Found the following defect IDs in commit comments: ${defectIds}`);
fetch('https://swgup.atlassian.net/rest/api/3/search?jql=project=SWT&fields=key', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'swatig139@gmail.com:<ATATT3xFfGF053Em-PIp593sRrtr31Y7rnbGV88H7pQS7r64NWdquxNgKTWdLp7KafEYRWj2WWhApnOgDi-i298NHHht3ddIdgz3vPbu8edbjpA9bFaYD02a18I4ct39ps3v8I9o_PDUhCO-fitS7MgHSLTfaArHmxIL-QCg8BkYBolqvNyw5ho=F4E7CF53>'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
.then(response => {
  console.log(
    `Response: ${response.status} ${response.statusText}`
  );
  return response.json(); // Parse the response as JSON
})
.then(data => {
  const issueKeys = data.issues.map(issue => issue.key); // Extract the keys of all the issues
  console.log(`Found the following issue keys: ${issueKeys}`);
})
.catch(err => console.error(err));

  } catch (error) {
    console.error(error);
  }
}

compareCommitCommentWithJiraIssue();






