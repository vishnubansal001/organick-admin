const express = require("express");
const { editProductPost, getEdit } = require("../controllers/product");
require("express-async-errors");
const route = express.Router();

route.patch("/:productId", editProductPost);

route.get("/:productId", getEdit);

module.exports = route;
