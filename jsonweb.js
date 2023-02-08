const jwt = require("jsonwebtoken");

// Data to be encoded into the JWT
const payload = {
  userId: 123,
  email: "example@example.com"
};


const secret = "mysecretkey";


const options = {
  expiresIn: "1h"
};


const token = jwt.sign(payload, secret, options);

console.log(token);





