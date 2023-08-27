const Product = require("../models/Product");
const User = require("../models/User");
const Orders = require("../models/Orders");
const News = require("../models/News");

const landingData = async (req, res) => {
  try {
    const productCount = await Product.countDocuments();
    const newsCount = await News.countDocuments();
    const orderCount = await Orders.countDocuments();
    const userCount = await User.countDocuments();
    const adminCount = await User.countDocuments({ isAdmin: true });

    return res.json({
      products: productCount,
      news: newsCount,
      orders: orderCount,
      users: userCount,
      admins: adminCount,
    });
  } catch (error) {
    console.error("Error:", err);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { landingData };
