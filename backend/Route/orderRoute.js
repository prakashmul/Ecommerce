const express = require("express");

const { createOrder, getAllOrders, getOrderByUser, deleteOrder, updateOrderedProduct } = require("../Controller/orderController");
const router = express.Router();

router.post("/create-order", createOrder);
router.get("/get-order", getAllOrders);
router.get("/get-order/:userId", getOrderByUser);
router.delete("/delete-order/:orderId", deleteOrder);
router.put("/update-order/:orderId", updateOrderedProduct);



module.exports = router;
