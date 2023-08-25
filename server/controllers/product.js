const mongoose = require("mongoose");
const cloudinary = require("../cloud/cloudinary");
const Product = require("../models/Product");

async function addProductPost(req, res) {
  try {
    const file = req.file;
    const { title, pCost, cCost, category } = req.body;
    // console.log(title);
    if (!file) {
      return res.status(400).json({ error: "No File Provided!!" });
    }
    console.log("passed");
    const cloudRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });
    const fileUrl = cloudRes.secure_url;
    const newProduct = new Product({
      title,
      pCost,
      cCost,
      category,
      img: fileUrl,
    });
    // console.log(newProduct);
    await newProduct.save();
    return res.status(200).json({ message: "Product saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json(error);
  }
}

async function allProducts(req, res) {
  const products = await Product.find({});
  const result = products.map((item) => ({
    _id: item._id,
    title: item.title,
    pCost: item.pCost,
    cCost: item.cCost,
    category: item.category,
    img: item.img,
  }));
  // console.log(result);
  // return result;
  if (result.length === 0) {
    return res.json({ products: [] });
  }
  return res.json({ products: result });
}

async function productDeletePost(req, res) {
  const id = req.params.productId;
  // console.log(req.params);
  if (!id) {
    return res.status(404).json({ error: "Id Didn't exists!!" });
  }
  // console.log(new mongoose.Types.ObjectId(id));
  Product.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
    .then(() => {
      console.log("DESTROYED PRODUCT");
      // res.redirect("/admin/all-products");
    })
    .catch((err) => {
      // const error = new Error(err);
      // error.httpStatusCode = 500;
      // return next(error);
      // return res.status(404).json({ error: "Server Error" });
      console.log(err);
    });
  // const products = await Product.find({});
  // console.log(products);
  return res.json({ message: "Product Deleted Successfully" });
}

module.exports = { addProductPost, allProducts, productDeletePost };
