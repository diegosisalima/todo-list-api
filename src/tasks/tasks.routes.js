const tasksServices = require("./tasks.services.js");
const router = require("express").Router();
const passportJWT = require("../middlewares/auth.middleware.js");

router
  .route("/projects/:id/tasks")
  .post(passportJWT, tasksServices.postNewTask);

router
  .route("/projects/:projectId/tasks/:taskId")
  .patch(passportJWT, tasksServices.patchMyTask)
  .delete(passportJWT, tasksServices.deleteMytask);

module.exports = router;
