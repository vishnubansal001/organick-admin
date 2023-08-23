const cloudinary = require("../cloud/cloudinary");
const News = require("../models/News");

async function addNewsPost(req, res) {
  try {
    const file = req.file;
    const { title, about, date } = req.body;
    console.log(title);
    if (!file) {
      return res.status(400).json({ error: "No File Provided!!" });
    }
    console.log("passed");
    const cloudRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });
    const fileUrl = cloudRes.secure_url;
    console.log(fileUrl)
    const newNews = new News({
      title,
      about,
      date,
      img: fileUrl,
    });
    console.log(newNews);
    await newNews.save();
    return res.status(200).json({ message: "News saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json(error);
  }
}

module.exports = { addNewsPost };
