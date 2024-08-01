const express = require("express");

const {
    addProduct,
    getAllProduct,
    deleteProduct,
    findProduct
  } = require("../Controller/productController");
  const upload = require("../utils/upload")
  const router = express.Router();
  
  router.post("/addproduct", upload.single('productImage'), addProduct);
  router.get("/viewproduct", getAllProduct);
  router.delete("/deleteproduct/:id", deleteProduct);
  router.get("/getproduct/:id", findProduct);

module.exports = router;
