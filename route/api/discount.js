const express = require('express');
const {createDiscountController, getDiscountController} = require('../../controller/discountController');
const router = express.Router();


router.post("/creatediscount", createDiscountController);
router.get("/getdiscount", getDiscountController);
module.exports = router;