
const axios = require("axios");

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${process.env.APP_TOKEN}`,
};

async function getInstallations() {
  const response = await axios.get("https://api.github.com/app/installations", { headers });
  return response.data;
}
async function getInstallationId() {
  const installations = await getInstallations();
  const installation = installations[0];
  return installation.id;
}
async function main() {
  const installationId = await getInstallationId();
  console.log(installationId);
}

main();
