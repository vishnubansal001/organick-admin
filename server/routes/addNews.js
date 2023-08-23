const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const route = express.Router();
const { uploadImage } = require("../middlewares/multer");
const { addNewsPost } = require("../controllers/news");

route.post(
  "/",
  uploadImage.single("img"),
  addNewsPost
);

module.exports = route;
