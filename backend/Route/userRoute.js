const express = require("express");
const {
  CreateUser,
  getAllUser,
  updateUser,
  logIn,
  getUserById,
  deleteUser,
  confirmUser,
  forgotPassword,
  resetPassword,
  resendConfirmation,
  rateProductUser,
} = require("../Controller/userController");
const { jwtMiddleware } = require("../Middleware/middleware");
const router = express.Router();

router.post("/register", CreateUser);
router.get("/users", getAllUser);
router.put("/update-user/:id", jwtMiddleware, updateUser);
router.post("/login", logIn);
router.get("/getUser/:id",getUserById);
router.delete("/delete/:id", jwtMiddleware, deleteUser);
router.get("/confirm-email/:token", confirmUser);
router.post("/forgot-password/", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/resend-verification", resendConfirmation);

router.put('/rate/:id', rateProductUser);
module.exports = router;
