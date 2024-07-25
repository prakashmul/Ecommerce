const express = require("express");
const {CreateUser, getAllUser, updateUser, logIn, verifyJWT} = require("../Controller/userController");

const router = express.Router();

router.post('/register', CreateUser);
router.get('/users', getAllUser);
router.put('/update-user/:id', verifyJWT, updateUser);
router.post('/login', logIn);

module.exports = router; 