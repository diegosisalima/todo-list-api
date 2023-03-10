const Projects = require("../models/projects.models.js");
const Tasks = require("../models/tasks.models");
const uuid = require("uuid").v4;

const createNewProject = async (body, userId) => {
  const newProject = {
    id: uuid(),
    userId: userId,
    title: body.title,
    description: body.description,
  };
  const result = await Projects.create(newProject);
  return result;
};

const findAllProjectsByUser = async (userId) => {
  const result = await Projects.findAll({
    where: {
      userId,
    },
    attributes: {
      exclude: ["userId"],
    },
    include: {
      model: Tasks,
    },
  });
  return result;
};

const updateProjectByUser = async (userId, projectId, body) => {
  const result = await Projects.update(body, {
    where: {
      userId,
      id: projectId,
    },
  });

  return result;
};

const deleteProjectByUser = async (userId, projectId) => {
  const result = await Projects.destroy({
    where: {
      id: projectId,
      userId,
    },
  });
  return result;
};
module.exports = {
  createNewProject,
  findAllProjectsByUser,
  updateProjectByUser,
  deleteProjectByUser,
};
