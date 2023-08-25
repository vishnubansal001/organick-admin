const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const cors = require("cors");
const UserSchema = require("./models/User");
const port = 8000;
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

const addProductRoute = require("./routes/addProduct");
const addNewsRoute = require("./routes/addNews");
const allNewsRoute = require("./routes/allNews");
const allProductsRoute = require("./routes/allProducts");
const allUsersRoute = require("./routes/allUsers");
const deleteProductPost = require("./routes/deleteProduct");

app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to the server");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use("/admin/add-product", addProductRoute);
app.use("/admin/add-news", addNewsRoute);
app.use("/admin/all-news", allNewsRoute);
app.use("/admin/all-products", allProductsRoute);
app.use("/admin/all-users", allUsersRoute);
app.use("/admin/delete-product", deleteProductPost);

app.get("/", (req, res, next) => {
  res.send("<h1>hello</h1>");
});

app.listen(port, () => {
  console.log(`server is listening on the ${port}`);
});
