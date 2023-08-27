const express = require("express");
const { userDeletePost } = require("../controllers/user");
require("express-async-errors");
const route = express.Router();

route.post(
  "/:userId",
  userDeletePost
);

module.exports = route;

