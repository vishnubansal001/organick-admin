const cloudinary = require("../cloud/cloudinary");
const Product = require("../models/Product");
const getDataUri = require("../utils/dataUril");

const addProductPost = async (req, res) => {
  try {
    const { file, body } = req;
    const { title, pCost, cCost, category } = body;

    if (!file) {
      return res.status(400).json({ error: "No File Provided!!" });
    }
    console.log(file);
    // try {
      const fileUri = getDataUri(req.file)
      // console.log(fileUri.content)
      const cloudRes = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "image",
      });
      console.log("passed");
      const fileUrl = cloudRes.secure_url;
      const newProduct = new Product({
        title,
        pCost,
        cCost,
        category,
        img: fileUrl,
      });
      await newProduct.save();
    // } catch (err) {
        // console.log(err);
    // }
    return res.json({ message: "Product saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { addProductPost };
