const axios = require('axios');
const btoa = require('btoa');

const jiraUrl = 'https://swgup.atlassian.net/rest/api/3/search';
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

   async function addLabelToIssue(defectId) {
  try {
    const issueResponse = await axios.get(jiraUrl, {
      headers: {
        "Authorization": `Basic ${Buffer.from(`${jiraUsername}:${jiraPassword}`).toString('base64')}`,
        "Accept": "application/json"
      }
    });
    console.log(issueResponse);

    const issues = issueResponse.data.issues;
    const matchingIssues = issues.filter(issue => issue.key === defectId);

    if (matchingIssues.length > 0) {
      const labelResponse = await axios.post(`${jiraUrl}/issue/${defectId}/labels`, { "add": ["int_deploy"] }, {
        headers: {
          "Authorization": `Basic ${Buffer.from(`${jiraUsername}:${jiraPassword}`).toString('base64')}`,
          "Content-Type": "application/json"
        }
      });
      console.log(`Label added to Jira issue ${defectId}`);
    } else {
      console.log(`Jira issue ${defectId} not found`);
    }
  } catch (err) {
    console.error(`Failed to add label to Jira issue ${defectId}`, err);
  }
}


    async function addLabelsToIssues() {
      for (const defectId of defectIds) {
        await addLabelToIssue(defectId);
      }
    }

    addLabelsToIssues();
  } catch (err) {
    console.error(`Failed to compare commit comments with Jira issues: ${err}`);
  }
}
compareCommitCommentWithJiraIssue();

