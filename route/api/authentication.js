const express = require('express');
const UserList = require('../../models/userlistSchema');
const emailValidation = require('../../helpers/emailValidation');
const router = express.Router();
const bcrypt = require('bcrypt');
const registrationController = require('../../controller/registrationController');
const emailVerificationController = require('../../controller/emailVerificationController');
const loginVerificationController = require('../../controller/loginVerificationController');

router.post('/registration', registrationController)
router.post('/emailverification', emailVerificationController)
router.post('/loginverification', loginVerificationController)

module.exports = router;