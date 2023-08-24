const express = require("express");
const { allNews } = require("../controllers/news");
require("express-async-errors");
const route = express.Router();

route.get(
  "/",
  allNews
);

module.exports = route;
