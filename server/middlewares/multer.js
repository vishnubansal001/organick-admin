const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
})

const imageFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);  // Accept the file
  } else {
    cb(new Error('Unsupported file type'), false);  // Reject the file
  }
};

exports.uploadImage = multer({ storage, imageFileFilter });

