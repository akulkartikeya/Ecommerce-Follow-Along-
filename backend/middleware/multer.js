const userImageStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname,"../userImage")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const ProductImagesStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname,"../productImages")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const userImage = multer({ storage: userImageStore });
  const productImages = multer({ storage: ProductImagesStore });

  module.exports = {userImage,productImages}



