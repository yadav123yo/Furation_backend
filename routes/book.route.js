const express = require("express");
const {
  getAllbooks,
  getBookDetails,
} = require("../controllers/Book");

const bookRoutes = express.Router();

// Define routes
bookRoutes.get("/", getAllbooks); 
bookRoutes.get("/:id", getBookDetails); 
module.exports = bookRoutes;