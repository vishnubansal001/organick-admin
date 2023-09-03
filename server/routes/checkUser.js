const express = require("express");
const { authUser } = require("../controllers/user");
require("express-async-errors");
const route = express.Router();

route.post(
  "/",
  authUser
);

module.exports = route;
