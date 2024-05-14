const express = require('express');
const {becomeMerchantController, getAllStoreListController} = require('../../controller/merchantController');
const router = express.Router();

router.post("/becomermerchant", becomeMerchantController)
router.get("/allstorelist", getAllStoreListController)

module.exports = router;