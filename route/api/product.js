const express = require('express');
const {createProductController, 
  // secureProductUploadController, 
  createVariantController, 
  getAllProductController, 
  deleteProductController,
  getAllVariantController} = require('../../controller/productController');

const router = express.Router();

// IMAGE UPLOADER MULTER
// =======================
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.originalname.split(".")[1]}`)
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/createproduct", 
// secureProductUploadController, 
createProductController);
router.post("/createvariant", upload.single('image'), createVariantController);
router.post("/deleteproduct", deleteProductController)

router.get("/allproductlist", getAllProductController)
router.get("/variantlist", getAllVariantController)
module.exports = router;