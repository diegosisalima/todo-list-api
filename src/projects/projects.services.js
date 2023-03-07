const projectsControllers = require("./projects.controllers.js");

const postNewProject = (req, res) => {
  const body = req.body;
  const userId = req.user.id;
  projectsControllers
    .createNewProject(body, userId)
    .then((data) => {
      res.status(201).json({ message: "project created successfully", data });
    })
    .catch((er) => res.status(400).json({ message: er }));
};

const getAllMyProjects = (req, res) => {
  const userId = req.user.id;
  projectsControllers
    .findAllProjectsByUser(userId)
    .then((data) => {
      res.status(200).json({ message: "your projects", data });
    })
    .catch((er) => res.status(400).json({ message: er.message }));
};

const patchMyProject = (req, res) => {
  const userId = req.user.id;
  const projectId = req.params.id;
  const body = {
    title: req.body.title,
    description: req.body.description,
  };
  projectsControllers
    .updateProjectByUser(userId, projectId, body)
    .then((data) => {
      res.status(201).json({ message: "project updated successfully" });
    })
    .catch((er) => res.status(400).json({ error: er.message }));
};
const deleteMyProject = (req, res) => {
  const userId = req.user.id;
  const projectId = req.params.id;
  projectsControllers
    .deleteProjectByUser(userId, projectId)
    .then(res.status(200).json({ message: "eliminated successfully" }))
    .catch((er) => res.status(400).json({ error: er.message }));
};
module.exports = {
  postNewProject,
  getAllMyProjects,
  patchMyProject,
  deleteMyProject,
};
