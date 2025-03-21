const express = require("express");
const route = express.Router();
const { papersGet, singlePaperGet, papersCreate } = require("../controllers/papersController")

// Papers Route
route.get("/", papersGet)

// Single Paper Route
route.get("/:id", singlePaperGet)

// Create Document
route.post("/create", papersCreate)

module.exports = route;