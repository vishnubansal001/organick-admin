const cloudinary = require("../cloud/cloudinary");
const Product = require("../models/Product");

// async function uploadFile(req, res) {
//   if (!file) {
//     return res.status(400).json({ error: "No File Provided!!" });
//   }
//   console.log("passed");
//   const cloudRes = await cloudinary.uploader.upload(req.file.path, {
//     resource_type: "image",
//   });
//   return cloudRes.secure_url;
// }

async function addProductPost(req, res) {
  try {
    const file = req.file;
    const { title, pCost, cCost, category } = req.body;
    console.log(title);
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
    console.log(newProduct);
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

module.exports = { addProductPost, allProducts };
