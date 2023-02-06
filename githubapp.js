const axios = require("axios");

const auth = {
  username: "SiyaaJhawar",
  password: "SHA256:tbc37FFw/bK2ezuR/DG0aP1AtyCACO5SlCHi9ndHu1Y="
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



    









