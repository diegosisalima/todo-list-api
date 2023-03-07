const db = require("../utils/database.js");
const { DataTypes } = require("sequelize");
const Projects = require("./projects.models.js");
const Tasks = db.define("tasks", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  projectId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Projects,
      key: "id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
module.exports = Tasks;
