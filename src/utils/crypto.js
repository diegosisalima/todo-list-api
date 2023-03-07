const bcrypt = require("bcrypt");

const comparePassword = (plainPassword, hashPassword) => {
  const result = bcrypt.compareSync(plainPassword, hashPassword);
  return result;
};

module.exports = { comparePassword };
