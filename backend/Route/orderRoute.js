const express = require("express");

const { createOrder, getAllOrders, getOrderByUser, deleteOrder } = require("../Controller/orderController");
const router = express.Router();

router.post("/create-order", createOrder);
router.get("/get-order", getAllOrders);
router.get("/get-order/:userId", getOrderByUser);
router.delete("/delete-order/:orderId", deleteOrder);


module.exports = router;
