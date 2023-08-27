const express = require("express");
const { landingData } = require("../controllers/landing");
require("express-async-errors");
const route = express.Router();

route.get(
  "/",
  landingData,
);

module.exports = route;