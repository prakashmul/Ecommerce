const OrderRequestModel = require("../Model/orderRequestModel");
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createOrderRequest = async (req, res) => {
  const { products, totalOrder, totalPrice, userId, address } = req.body;
  const orderReq = await OrderRequestModel.create({
    products: products,
    totalOrder: totalOrder,
    totalPrice: totalPrice,
    shippingAddress: {
      user: userId,
      address: address,
    },
  });

  if (!orderReq) {
    return res.status(400).json({ error: "Failed to create order" });
  }
  return res
    .status(200)
    .json({ message: "Order request created successfully" });
};

exports.getOrderRequestById = async (req, res) => {
  const { id } = req.params;

  const order = await OrderRequestModel.findById(id)
    .populate("shippingAddress.user")
    .populate("products");

  if (!order) {
    return res.status(404).json({ success: false, message: "Order not found" });
  }
  res.send(order);
};

exports.getOrderRequest = async (req, res) => {
  const order = await OrderRequestModel.find()
    .populate("shippingAddress.user")
    .populate("products");

  if (!order) {
    return res.status(404).json({ success: false, message: "Order not found" });
  }
  res.send(order);
};


exports.createPaymentIntent = async (req, res) => {
  const {stripePaymentIntentId, requestId} = req.body

  const order = await  OrderRequestModel.findById(requestId).populate('products')

  const amount = Math.round(order.totalPrice * 100)

  const paymentIntent = stripe.paymentIntents.create({
    name: "",
    amount: amount,
    payment_method_types: ['card'],
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  })

  if(!paymentIntent){
    return res.status(400).json({error: "Failed to create payment intent"})
  }

  order.stripePaymentIntentId = paymentIntent.id;
  await order.save();

  return res.json({message: "Payment successful"})

}