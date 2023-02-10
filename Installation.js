const axios = require("axios");

async function createInstallationToken(installationId) {
  try {
    const response = await axios.post(
      `https://api.github.com/app/installations/34018738/access_tokens`,
      {},
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer $secrets.GITHUB_TOKEN`
        }
      }
    );

    return response.data.token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}










