const { checkUserCredentials } = require("./auth.controllers.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postLogin = (req, res) => {
  const { email, password } = req.body;
  checkUserCredentials(email, password)
    .then((user) => {
      if (user) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "60d",
        });
        res
          .status(200)
          .json({ message: "successful credentials", token: token });
      } else {
        res.status(400).json({ message: "invalid credentials" });
      }
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};
module.exports = { postLogin };
