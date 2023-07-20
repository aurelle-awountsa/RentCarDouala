const express = require("express");
const router = express.Router();
//const passport = require("passport");
const controller_user = require("../controllers/users");

router.post("/signup", controller_user.create_user);
module.exports = router;