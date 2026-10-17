const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  
  // const mimeType = allowedTypes.test(file.mimetype);
  
  if (extName) {
    return cb(null, true);
  }
  
  cb(new Error('Only images are allowed!'));
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

module.exports = upload;