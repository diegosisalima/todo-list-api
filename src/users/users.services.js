const usersControllers = require("./users.controllers.js");

const postNewUser = (req, res) => {
  const body = req.body;
  usersControllers
    .createNewUser(body)
    .then((data) =>
      res.status(201).json({ message: "User created successfully", data })
    )
    .catch((er) => res.status(400).json({ error: er.message }));
};

const getMyUser = (req, res) => {
  usersControllers
    .findUserById(req.user.id)
    .then((data) => {
      res.status(200).json({ message: "My current User", data });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const patchMyUser = (req, res) => {
  const id = req.user.id;
  const body = req.body;
  usersControllers
    .updatedUser(id, { username: body.username })
    .then(() => {
      res.status(201).json({ message: "user updated successfully" });
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;
  usersControllers
    .deleteUser(id)
    .then(() => {
      res.status(200).json({ message: "Count eliminated" });
    })
    .catch((e) => {
      res.status(200).json({ error: e.message });
    });
};

module.exports = { postNewUser, getMyUser, patchMyUser, deleteMyUser };
