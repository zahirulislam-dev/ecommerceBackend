const emailValidation = require("../helpers/emailValidation");
const UserList = require("../models/userlistSchema")
const bcrypt = require('bcrypt');

async function loginVerificationController(req,res){
    
        const {email,password} = req.body;
    
      if(!email){
        return res.json({error: 'Email Address is Required'})
      }
      if(!emailValidation(email)){
        return res.json({error: 'Email is not valid'})
      }
      if(!password){
        return res.json({error: 'Password is Required'})
      }
    
      const existingEmail =await UserList.find({email});
      if(existingEmail.length > 0){
        bcrypt.compare(password, existingEmail[0].password).then(function(result) {
          if(result){
            res.json({success: "Login Successfull"})
          }else{
            res.json({error: "Email Or Password not match"})
          }
      });
      }
    
}
module.exports = loginVerificationController;