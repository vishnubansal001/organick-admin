const express = require("express");
const { productDeletePost } = require("../controllers/product");
require("express-async-errors");
const route = express.Router();

route.post(
  "/:productId",
  productDeletePost
);

module.exports = route;