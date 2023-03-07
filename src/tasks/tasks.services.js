const tasksControllers = require("./tasks.controllers.js");

const postNewTask = (req, res) => {
  const userId = req.user.id;
  const projectId = req.params.id;
  const { isComplete, ...body } = req.body;
  tasksControllers
    .createNewTask(userId, projectId, body)
    .then((data) => {
      res.status(201).json({ message: "Task created successfully", data });
    })
    .catch((er) => {
      res.status(400).json({ error: er.message });
    });
};

const patchMyTask = (req, res) => {
  const userId = req.user.id;
  const projectId = req.params.projectId;
  const taskId = req.params.taskId;
  const body = req.body;
  tasksControllers
    .updateTask({ taskId, userId, projectId, isComplete: body.isComplete })
    .then(() => {
      res.status(201).json({ message: "Task is completed" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteMytask = (req, res) => {
  const userId = req.user.id;
  const projectId = req.params.projectId;
  const taskId = req.params.taskId;
  tasksControllers
    .deleteMytask(taskId, projectId, userId)
    .then((result) => {
      res.status(201).json({ message: "Task eliminated successfully", result });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
module.exports = { postNewTask, patchMyTask, deleteMytask };
