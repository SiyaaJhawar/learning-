const axios = require('axios');

async function createGitHubIssue(SiyaaJhawar, learning-, hello world, i am a human) {
  try {
    const response = await axios.post(
      `https://api.github.com/repos/${SiyaaJhawar}/${learning-}/issues`,
      {
        title: hello world ,
        body:  i am a human
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

createGitHubIssue('SiyaaJhawar', 'learning-', 'hello world', 'i am a human');
