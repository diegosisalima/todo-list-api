const router = require("express").Router();
const usersServices = require("./users.services.js");
const passportJWT = require("../middlewares/auth.middleware");

router.post("/users", usersServices.postNewUser);
router
  .route("/users/me")
  .get(passportJWT, usersServices.getMyUser)
  .patch(passportJWT, usersServices.patchMyUser)
  .delete(passportJWT, usersServices.deleteMyUser);

module.exports = router;
