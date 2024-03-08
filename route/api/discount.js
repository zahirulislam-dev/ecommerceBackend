const express = require('express');
const {createDiscountController, getDiscountController} = require('../../controller/discountController');
const router = express.Router();


router.post("/createDiscount", createDiscountController);
router.get("/getDiscount", getDiscountController);
module.exports = router;