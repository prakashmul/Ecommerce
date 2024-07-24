const express = require("express");
const {CreateUser, getAllUser, updateUser, logIn} = require("../Controller/userController");

const router = express.Router();

router.post('/register', CreateUser);
router.get('/users', getAllUser);
router.put('/update-user/:id', updateUser);
router.post('/login', logIn);

module.exports = router;