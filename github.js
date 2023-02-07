const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "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",
});

async function createIssue(SiyaaJhawar, learning, Hi, body) {
  try {
    const issue = await octokit.issues.create({
      SiyaaJhawar,
      learning,
      Hi,
      body,
    });
    console.log(`Issue created with ID: ${issue.data.id}`);
  } catch (error) {
    console.error(`Error creating issue: ${error}`);
  }
}

createIssue("SiyaaJhawar", "learning", "Hi", "Issue body");
