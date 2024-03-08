const express = require('express');
const becomeMerchantController = require('../../controller/merchantController');
const router = express.Router();

router.post("/becomermerchant", becomeMerchantController)

module.exports = router;