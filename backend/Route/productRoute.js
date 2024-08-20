const express = require("express");

const {
    addProduct,
    getAllProduct,
    deleteProduct,
    findProduct,
    updateProduct,
    relatedProduct
  } = require("../Controller/productController");
  const upload = require("../utils/upload")
  const router = express.Router();
  
  router.post("/addproduct", upload.single('productImage'), addProduct);
  router.get("/viewproduct", getAllProduct);
  router.delete("/deleteproduct/:id", deleteProduct);
  router.get("/getproduct/:id", findProduct);
  router.put("/updateproduct/:id", upload.single('productImage'), updateProduct);
  router.get("/relatedproduct/:id", relatedProduct);

module.exports = router;
