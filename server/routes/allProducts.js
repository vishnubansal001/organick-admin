const express = require("express");
const { allProducts } = require("../controllers/product");
require("express-async-errors");
const route = express.Router();

route.get(
  "/",
  allProducts
);

module.exports = route;
