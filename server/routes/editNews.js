const express = require("express");
const { getEditNews, editNewsPost } = require("../controllers/news");
require("express-async-errors");
const route = express.Router();

route.patch("/:newsId", editNewsPost);

route.get("/:newsId", getEditNews);

module.exports = route;
