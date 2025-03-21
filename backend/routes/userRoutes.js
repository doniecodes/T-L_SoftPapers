const express = require("express");
const route = express.Router();
const { userCreate, userLogin } = require("../controllers/usersController");

// Signup routes
route.post("/signup", userCreate)

// Login routes
route.post("/login", userLogin)

module.exports = route;