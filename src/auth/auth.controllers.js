const { findUserByEmail } = require("../users/users.controllers.js");
const { comparePassword } = require("../utils/crypto.js");

const checkUserCredentials = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    const verifyPassword = comparePassword(password, user.password);
    if (!verifyPassword) {
      return false;
    }
    return user;
  } catch (error) {
    return false;
  }
};

module.exports = { checkUserCredentials };
