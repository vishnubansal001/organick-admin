const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    require: true,
  },
  pCost: {
    type: Number,
    required: true,
  },
  cCost: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

module.exports = mongoose.model("Product", ProductSchema);