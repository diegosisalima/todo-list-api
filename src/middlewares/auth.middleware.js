const { ExtractJwt, Strategy } = require("passport-jwt");
const passport = require("passport");
const { findUserById } = require("../users/users.controllers.js");
require("dotenv").config();

const passportConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(passportConfig, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
      .then((data) => {
        data
          ? done(null, tokenDecoded)
          : done(null, false, { message: "User not found" });
      })
      .catch((error) => {
        done(error, false);
      });
  })
);

module.exports = passport.authenticate("jwt", { session: false });
