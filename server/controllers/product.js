const cloudinary = require("../cloud/cloudinary");
const Product = require("../models/Product");
const getDataUri = require("../utils/dataUril");


async function uploadFile(req, res){
  if (!file) {
    return res.status(400).json({ error: "No File Provided!!" });
  }
  console.log("passed");
  // console.log("file accessed successfully")
  const cloudRes = await cloudinary.uploader.upload(req.file.path, {
    resource_type: "image",
  });
  // const fileUrl = cloudRes.secure_url;
  return cloudRes.secure_url
}

async function addProductPost(req, res) {
  try {
    const file = req.file; // Access the uploaded image file
    const { title, pCost, cCost, category } = req.body;
    console.log(title); 
    if (!file) {
      return res.status(400).json({ error: "No File Provided!!" });
    }
    console.log("passed");
    // console.log("file accessed successfully")
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
    console.log(newProduct)
    await newProduct.save();
    return res.status(200).json({ message: "Product saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json(error);
  }
}

module.exports = { addProductPost };
