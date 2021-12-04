const express = require("express");
const router = express.Router();
const ProductService = require("../Services/orderedProduct.service");

router.post("/postproduct", ProductService.postproduct);
router.post("/getproduct", ProductService.getproduct);

module.exports = router;