const express = require("express");
const { getAllUsers, registerUser, userLogin } = require("../controllers/User");
const userRoutes = express.Router();

// Define routes
userRoutes.get("/", getAllUsers); 
userRoutes.post("/register", registerUser); 
userRoutes.post("/login", userLogin); 

module.exports = userRoutes;