const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const cors = require("cors");
const UserSchema = require("./models/User");
const port = 8000;
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const addProductRoute = require("./routes/addProduct");
app.use(
  express.urlencoded({
    extended: true,
  })
);

// mongoose
//   .connect(mongoURL)
//   .then(() => {
//     console.log("Connected to the server");

 
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function mongoConnect(){
  await mongoose.connect(MONGO_URL)
}
mongoConnect();

app.use(express.json());
app.use(cors());
app.use("/admin/add-product", addProductRoute);
app.get("/", (req, res, next) => {
  res.send("<h1>hello</h1>");
});

app.listen(port, () => {
  console.log(`server is listening on the ${port}`);
});
