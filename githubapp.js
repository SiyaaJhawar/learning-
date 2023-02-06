const axios = require('axios');
const auth = {
  username: "SiyaaJhawar",
  password: "SHA256:tzGK/2qqqpwA+RL5vNtRlt+i1WMU/aEWxGJjdWBK/Ow="
};

async function createGitHubIssue(SiyaaJhawar, learning,Hi, issueBody) {
  try {
    const response = await axios.post(
      `https://api.github.com/repos/SiyaaJhawar/learning-/issues`,
      {
        title: Hi,
        body: issueBody
      },
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`
        }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

createGitHubIssue('SiyaaJhawar', 'learning', 'Hi', 'Issue body');









