const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const route = express.Router();
const addProductController = require("../controllers/product");
const { uploadImage } = require("../middlewares/multer");

route.post(
  "/admin/add-product",
  uploadImage.single("img"),
  addProductController.addProductPost
);

module.exports = route;
