
const axios = require("axios");

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${process.env.APP_TOKEN}`,
};

async function getInstallations() {
  const response = await axios.get("https://api.github.com/SiyaaJhawar/installations", { headers });
  return response.data;
}
