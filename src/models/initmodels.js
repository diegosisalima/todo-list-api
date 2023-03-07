const Users = require("./users.models.js");
const Projects = require("./projects.models.js");
const Tasks = require("./tasks.models.js");

const initModels = () => {
  Users.hasMany(Projects);
  Projects.belongsTo(Users);

  Projects.hasMany(Tasks);
  Tasks.belongsTo(Projects);
};
module.exports = initModels;
