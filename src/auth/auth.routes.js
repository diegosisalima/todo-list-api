const { postLogin } = require("./auth.services.js");
const router = require("express").Router();
router.post("/auth/login", postLogin);
module.exports = router;
