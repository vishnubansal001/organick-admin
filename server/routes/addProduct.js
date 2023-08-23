const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const route = express.Router();
const {addProductPost} = require("../controllers/product");
const { uploadImage } = require("../middlewares/multer");

route.post(
  "/",
  uploadImage.single("img"),
  addProductPost
);

module.exports = route;
