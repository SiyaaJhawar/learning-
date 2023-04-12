const axios = require('axios');
const btoa = require('btoa');
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


 
//var xhr = new XMLHttpRequest();

const jiraUrl = 'https://swgup.atlassian.net/rest/api/2';
const githubUrl = 'https://api.github.com/repos/SiyaaJhawar/action/commits/7ba17fe7086423a30485d2949cf32255bc2c479d/comments';
const jiraUsername = process.env.JIRA_USERNAME;
const jiraPassword = process.env.JIRA_API_TOKEN;
const username = process.env.GITHUB_USERNAME;
const password = process.env.GITHUB_API_TOKEN;

const defectRegex = /([A-Z]{1}[A-Z]{2,})-\d+/g;

async function compareCommitCommentWithJiraIssue() {
  try {
    const commitsResponse = await axios.get(githubUrl, {
      headers: {
        "Authorization": `Basic ${btoa(`${username}:${password}`)}`,
        "Accept": "application/json"
      }
    });
    const commentTexts = commitsResponse.data.map(comment => comment.body);
    const defectIds = commentTexts.flatMap(text => text.match(defectRegex));
    console.log(`Found the following defect IDs in commit comments: ${defectIds}`);

   async function getAllIssuesForProject(projectKey) {
  try {
    const issueResponse = await axios.get(`${jiraUrl}/search?jql=project=${projectKey}`, {
      headers: {
        "Authorization": `Basic ${btoa(`${jiraUsername}:${jiraPassword}`)}`,
         "Accept": "application/json"
      }
    });
   const projectKey = 'SWT'; // example project key
const issues = await getAllIssuesForProject(projectKey);
console.log(issues); // array of issue objects

  

   

compareCommitCommentWithJiraIssue();
