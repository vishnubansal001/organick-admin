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
const editProductPost = require("./routes/editProduct");
const landingPageDataRoute = require("./routes/landingData");
const deleteNewsRoute = require("./routes/deleteNews");
const editNewsRoute = require("./routes/editNews");
const addOrRemoveAdminRoute = require("./routes/addAndRemoveAdmin");
const deleteUserRoute = require("./routes/deleteUser");
const News = require("./models/News");

app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    // const news = new News({
    //   title: "opiuysdgc",
    //   about: "pwoeirudyfgh",
    //   // date,
    //   img: "https://res.cloudinary.com/dmtyzztj5/image/upload/v1692973310/fkgm9m6rmrvqzihlbrbf.png",
    // });

    // news.save();
    console.log("Connected to the server");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use("/admin/add-product", addProductRoute);
app.use("/admin/data", landingPageDataRoute);
app.use("/admin/add-news", addNewsRoute);
app.use("/admin/all-news", allNewsRoute);
app.use("/admin/all-products", allProductsRoute);
app.use("/admin/all-users", allUsersRoute);
app.use("/admin/delete-product", deleteProductPost);
app.use("/admin/edit-product", editProductPost);
app.use("/admin/delete-news", deleteNewsRoute);
app.use("/admin/edit-news", editNewsRoute);
app.use("/admin/add-remove-admin", addOrRemoveAdminRoute);
app.use("/admin/delete-user", deleteUserRoute);

app.get("/", (req, res, next) => {
  res.send("<h1>hello</h1>");
});

app.listen(port, () => {
  console.log(`server is listening on the ${port}`);
});
