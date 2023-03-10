const tasksControllers = require("./tasks.controllers.js");

const postNewTask = (req, res) => {
  const userId = req.user.id;
  const projectId = req.params.id;
  const { isComplete, ...body } = req.body;
  tasksControllers
    .createNewTask(userId, projectId, body)
    .then(() => {
      res.status(201).json({ message: "Task created successfully" });
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
      res.status(200).json({ message: "task status updated successfully" });
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
    .then(() => {
      res.status(200).json({ message: "Task eliminated successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
module.exports = { postNewTask, patchMyTask, deleteMytask };
