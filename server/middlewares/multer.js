const multer = require("multer");
const storage = multer.diskStorage({})

const imageFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image")) {
    cb("Supported only image files!", false);
  }
  cb(null, true);
};

exports.uploadImage = multer({ storage, imageFileFilter });

