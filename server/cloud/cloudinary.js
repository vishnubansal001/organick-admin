const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dmtyzztj5",
  api_key: "887862371995626",
  api_secret: "kxq6JFB3dY7AIC2MN4CsixRwq5M",
  secure: true,
});

module.exports = cloudinary;
