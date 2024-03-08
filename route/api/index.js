const express = require('express')
const router = express.Router();
const autenticationRoute = require('./authentication')
const categoryRoute = require('./category')
const merchantRoute = require('./merchant')
const productRoute = require('./product')
const discountRoute = require('./discount')


router.use('/authentication', autenticationRoute)
router.use('/category', categoryRoute)
router.use('/merchant', merchantRoute)
router.use('/product', productRoute)
router.use('/discount', discountRoute)


module.exports = router;