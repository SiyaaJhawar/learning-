const axios = require('axios');

async function createGitHubIssue(SiyaaJhawar, learning-, Hi, This is a sample) {
  try {
    const response = await axios.post(
      `https://api.github.com/repos/SiyaaJhawar/learning-/issues`,
      {
        title: Hi,
        body: This is a sample
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

createGitHubIssue('SiyaaJhawar', 'learning-', 'Hi', 'This is a sample');



    









