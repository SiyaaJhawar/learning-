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

async function getAllIssuesForProject(projectKey) {
  try {
    const issueResponse = await axios.get(`${jiraUrl}/search?jql=project="SWT"`, {
  headers: {
    "Authorization": `Basic ${btoa(`${jiraUsername}:${jiraPassword}`)}`,
    "Accept": "application/json"
  }


//console.log(`Username: ${jiraUsername}`);
//console.log(`API Token: ${jiraPassword}`);
    });
    return issueResponse.data.issues;
  } catch (error) {
    console.error(error);
  }
}

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

    const projectKey = 'SWT'; // example project key
    const issues = await getAllIssuesForProject(projectKey);
    const matchingIssues = issues.filter(issue => defectIds.includes(issue.key));
    console.log(`Found the following issues in Jira for the defect IDs: ${matchingIssues.map(issue => issue.key)}`);
    return matchingIssues;
  } catch (error) {
    console.error(error);
  }
}
async function getMatchingIssues() {
  const matchingIssues = await compareCommitCommentWithJiraIssue();
  console.log(matchingIssues);
}

getMatchingIssues(); // call the function to retrieve and log the matching issues

