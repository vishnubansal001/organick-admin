const express = require("express");
const { addOrRemoveAdminPost } = require("../controllers/user");
require("express-async-errors");
const route = express.Router();

route.post("/:userId", addOrRemoveAdminPost);

module.exports = route;
