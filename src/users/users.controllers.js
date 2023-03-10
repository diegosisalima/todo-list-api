const Users = require("../models/users.models.js"),
  uuid = require("uuid").v4,
  bcrypt = require("bcrypt");

const createNewUser = async (body) => {
  const newUser = {
    id: uuid(),
    username: body.username,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    //isActive: body.isActive,
    //rol: body.rol,
  };
  const result = await Users.create(newUser);
  return result;
};

const findUserByEmail = async (email) => {
  const result = await Users.findOne({
    where: {
      email,
    },
  });
  return result;
};

const findUserById = async (id) => {
  const result = await Users.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["id", "password"],
    },
  });
  return result;
};

const updatedUser = async (id, body) => {
  const result = await Users.update(body, {
    where: {
      id,
    },
  });
  return result[0];
};

const deleteUser = async (id) => {
  const result = await Users.destroy({
    where: {
      id,
    },
  });
  return result;
};

module.exports = {
  createNewUser,
  findUserByEmail,
  findUserById,
  updatedUser,
  deleteUser,
};
