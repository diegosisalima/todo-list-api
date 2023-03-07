const projectServices = require("./projects.services.js");
const router = require("express").Router();
const passportJWT = require("../middlewares/auth.middleware");

router
  .route("/projects")
  .post(passportJWT, projectServices.postNewProject)
  .get(passportJWT, projectServices.getAllMyProjects);

router
  .route("/projects/:id")
  .patch(passportJWT, projectServices.patchMyProject)
  .delete(passportJWT, projectServices.deleteMyProject);

module.exports = router;
