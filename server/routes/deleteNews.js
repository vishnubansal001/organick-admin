const express = require("express");
const { newsDeletePost } = require("../controllers/news");
require("express-async-errors");
const route = express.Router();

route.post(
  "/:newsId",
  newsDeletePost
);

module.exports = route;

