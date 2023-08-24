const express = require("express");
const { allUsers } = require("../controllers/user");
require("express-async-errors");
const route = express.Router();

route.get(
  "/",
  allUsers
);

module.exports = route;
