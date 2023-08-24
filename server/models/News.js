const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  date: {
    // type: String,
    type:Date,
    default: new Date(),
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

module.exports = mongoose.model("News", NewsSchema);
