const db = require("../utils/database.js");
const { DataTypes } = require("sequelize");
const Users = require("./users.models.js");
const Projects = db.define("projects", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});
module.exports = Projects;
