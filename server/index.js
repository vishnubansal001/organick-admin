const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const cors = require("cors");
const UserSchema = require("./models/User");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const port = 8000;
require("dotenv").config();
const cookieParser = require("cookie-parser");
const MONGO_URL = process.env.MONGO_URL;
const bcrypt = require("bcryptjs");

// const store = new MongoDBStore({
//   uri: MONGO_URL,
//   collection: "sessions",
// });

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
const checkUserRoute = require("./routes/checkUser");
const News = require("./models/News");
const User = require("./models/User");

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

    // const salt = bcrypt.genSalt(10);
    // const user = new User({
    //   name: "abc",
    //   email: "abc@gmail.com",
    //   password: `${bcrypt.hash("abc1234", salt)}`,
    //   isAdmin: true,
    //   isOwner: false,
    // });
    // user.save();

    // bcrypt.genSalt(10, (err, salt) => {
    //   if (err) {
    //     console.error('Error generating salt:', err);
    //     return;
    //   }
    
    //   const pass = "abc1234";
    
    //   // Hash the password using the generated salt
    //   bcrypt.hash(pass, salt, (err, hash) => {
    //     if (err) {
    //       console.error('Error hashing password:', err);
    //       return;
    //     }
    
    //     const user = new User({
    //       name: "abc",
    //       email: "abc@gmail.com",
    //       password: hash, // Store the hashed password in the user object
    //       isAdmin: true,
    //       isOwner: false,
    //     });
    
    //     // Save the user object with the hashed password to the database
    //     user.save();
    //   });
    // });
    console.log("Connected to the server");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser());
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
app.use("/admin/check-user", checkUserRoute);

app.get("/", (req, res, next) => {
  res.send("<h1>hello</h1>");
});

app.listen(port, () => {
  console.log(`server is listening on the ${port}`);
});
