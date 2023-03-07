const Tasks = require("../models/tasks.models.js");
const Projects = require("../models/projects.models.js");
const uuid = require("uuid").v4;

const createNewTask = async (userId, projectId, body) => {
  const newTask = {
    id: uuid(),
    projectId: projectId,
    name: body.name,
    isComplete: false,
  };
  const result = await Tasks.create(newTask, {
    include: {
      model: Projects,
      where: {
        id: projectId,
        userId,
      },
    },
  });
  return result;
};

const updateTask = async (objBody) => {
  const result = await Tasks.update(objBody, {
    where: {
      id: objBody.taskId,
    },
    include: {
      model: Projects,
      where: {
        id: objBody.projectId,
        userId: objBody.userId,
      },
    },
  });
  return result;
};

const deleteMytask = async (taskId, projectId, userId) => {
  const result = await Tasks.destroy({
    where: {
      id: taskId,
    },
    include: {
      model: Projects,
      where: {
        id: projectId,
        userId,
      },
    },
  });
};
module.exports = { createNewTask, updateTask, deleteMytask };
