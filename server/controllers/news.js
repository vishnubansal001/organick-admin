const cloudinary = require("../cloud/cloudinary");
const News = require("../models/News");

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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
    console.log(fileUrl);
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

async function allNews(req, res) {
  const news = await News.find({});

  const result = news.map((item) => ({
    _id: item._id,
    title: item.title,
    about: item.about,
    date:item.date.getDate(),
    month: shortMonths[item.date.getMonth()],
    img: item.img,
  }));
  // console.log(result);
  // return result;
  res.json({ news: result });
}

module.exports = { addNewsPost, allNews };
