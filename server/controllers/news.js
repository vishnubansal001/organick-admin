const mongoose = require("mongoose");
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
    // console.log(title);
    if (!file) {
      return res.status(400).json({ error: "No File Provided!!" });
    }
    // console.log("passed");
    const cloudRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });
    const fileUrl = cloudRes.secure_url;
    // console.log(fileUrl);
    const newNews = new News({
      title,
      about,
      date,
      img: fileUrl,
    });
    // console.log(newNews);
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
    date: item.date.getDate(),
    month: shortMonths[item.date.getMonth()],
    img: item.img,
  }));
  // console.log(result);
  // return result;
  if (result.length === 0) {
    return res.json({ news: [] });
  }
  return res.json({ news: result });
}

async function newsDeletePost(req, res) {
  const id = req.params.newsId;
  // console.log(req.params);
  if (!id) {
    return res.status(404).json({ error: "Id Didn't exists!!" });
  }
  // console.log(new mongoose.Types.ObjectId(id));
  News.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
    .then(() => {
      console.log("Destroyed News");
    })
    .catch((err) => {
      console.log(err);
    });
  return res.json({ message: "News Deleted Successfully" });
}

async function getEditNews(req, res) {
  const id = req.params.newsId;
  if (!id) {
    return res.status(404).json({ error: "Id Didn't exists!!" });
  }

  News.findById(id)
    .then((news) => {
      if (!news) {
        return res.status(404).json({ error: "No News Found" });
      }
      const result = {
        _id: news._id,
        title: news.title,
        about: news.about,
        date: news.date,
        // month: shortMonths[news.date.getMonth()],
        img: news.img,
      };
      console.log(result);
      return res.json({ news: result });
    })
    .catch((err) => {
      console.log(err);
    });
  // return res.json({ message: "News Got Successfully" });
}

async function editNewsPost(req, res) {
  const file = req.file;
  const { title, about, date } = req.body;
  const id = req.params.newsId;

  if (!id) {
    return res.status(404).json({ error: "Id Didn't exists!!" });
  }
  const news = await News.findOneAndUpdate(
    {
      _id: id,
    },
    { title, about, date }
  )
    .then((news) => {
      if (!news) {
        return res.status(404).json({ error: "No news Found" });
      }
      console.log(news);
      return news;
    })
    .catch((err) => {
      console.log(err);
    });
  if (file) {
    const cloudRes = cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    const fileUrl = cloudRes.secure_url;

    news.img = fileUrl;
  }

  console.log(news);
  await news.save();

  return res.json({ message: "News Edited Successfully" });
}

module.exports = {
  addNewsPost,
  allNews,
  newsDeletePost,
  getEditNews,
  editNewsPost,
};
