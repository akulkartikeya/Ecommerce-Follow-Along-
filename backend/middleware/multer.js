const multer = require("multer");
const path = require("path"); // ✅ Import path module

const userImageStore = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../userImage")); // ✅ Corrected path
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // ✅ Preserve file extension
    }
});

const ProductImagesStore = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../productImages")); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // ✅ Preserve file extension
    }
});

const userImage = multer({ storage: userImageStore });
const productImages = multer({ storage: ProductImagesStore });

module.exports = { userImage, productImages };
