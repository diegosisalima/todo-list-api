const { Sequelize } = require("sequelize");
const config = require("../../config.js");
const db = new Sequelize(config.db[config.api.nodeEnv]);
module.exports = db;
