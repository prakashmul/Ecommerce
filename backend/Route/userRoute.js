const express = require("express");
const {
  CreateUser,
  getAllUser,
  updateUser,
  logIn,
  getUserById,
  deleteUser,
  confirmUser,
} = require("../Controller/userController");
const { jwtMiddleware } = require("../Middleware/middleware");
const router = express.Router();

router.post("/register", CreateUser);
router.get("/users", getAllUser);
router.put("/update-user/:id", jwtMiddleware, updateUser);
router.post("/login", logIn);
router.get("/getUser/:id",jwtMiddleware, getUserById);
router.delete("/delete/:id", jwtMiddleware, deleteUser);
router.get("/confirm-email/:token", confirmUser);

module.exports = router;
