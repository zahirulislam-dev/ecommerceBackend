const emailValidation = require("../helpers/emailValidation");
const emailVerificationTemplate = require("../helpers/emailVerificationTemplate");
const sendEmail = require("../helpers/sendEmail");
const UserList = require("../models/userlistSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function registrationController(req,res){
    const {firstName,lastName,email,mobile,presentAddress,permanentAddress,city,postcode,division,district,password} = req.body;

  if(!firstName || !lastName){
    return res.json({error: 'FirstName & LastName Is Required'})
  }
  if(!email){
    return res.json({error: 'Please Provide the Email Address'})
  }
  if(!emailValidation(email)){
    return res.json({error: 'Email is not valid'})
  }

  const existingEmail =await UserList.find({email});
  if(existingEmail.length > 0){
    return res.json({error: "This email address is in already used"})
  }

  bcrypt.hash(password, 10, function(err, hash) {
    const userlist = new UserList({
      firstName,
      lastName,
      email,
      mobile,
      presentAddress,
      permanentAddress,
      city,
      postcode,
      division,
      district,
      password: hash
    })
    userlist.save()
    var token = jwt.sign({ email }, 'mamun');
    sendEmail(email, 'EMAIL VERIFICATION', emailVerificationTemplate(token))
});

  res.json(req.body);
}

module.exports = registrationController;