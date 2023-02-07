const axios = require("axios");

const auth = {
  username: "SiyaaJhawar",
  password: "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"
};

const issue = {
  title: "Hi",
  body: "This is the body of the test issue"
};

axios
  .post("https://api.github.com/repos/SiyaaJhawar/learning-/issues", issue, { auth })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


