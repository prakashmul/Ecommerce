const express = require("express");

const { createOrder, getAllOrders, getOrderByUser, deleteOrder, updateOrderedProduct } = require("../Controller/orderController");
const { jwtMiddleware } = require("../Middleware/middleware");
const { createOrderRequest, getOrderRequestById, getOrderRequest } = require("../Controller/orderRequestController");
const router = express.Router();

router.post("/create-order", createOrder);
router.get("/get-order", getAllOrders);
router.get("/get-order/:userId", getOrderByUser);
router.delete("/delete-order/:orderId", deleteOrder);
router.put("/update-order/:orderId",jwtMiddleware, updateOrderedProduct);



// order request
router.post('/order-request', createOrderRequest);
router.get('/order-request/:id', getOrderRequestById);
router.get('/order-request', getOrderRequest);



module.exports = router;
