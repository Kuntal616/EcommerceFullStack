const multer = require('multer');
const path = require('path');
// const fs = require('fs');

// Ensure uploads directory exists
// const dir = './uploads';
// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }
// Define storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  }
});
// File type filter (images only)
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error('Images only'));
};

const upload = multer({ storage, fileFilter });

module.exports = upload;