const Octokit = require("octokit");

const octokit = new Octokit({
  auth: "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"
});

async function getInstallationId(repo) {

  const installations = await octokit.apps.listInstallations({});


  const installation = installations.data.find(installation => {
    return installation.account.login === repo.owner.login;
  });

 
  const token = await octokit.apps.createInstallationToken({
    installation_id: installation.id
  });

  console.log(`Installation ID: ${installation.id}`);
  console.log(`Installation token: ${token.data.token}`);
}

getInstallationId({ owner: { login: "SiyaaJhawar" } });
