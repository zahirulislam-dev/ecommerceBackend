var jwt = require('jsonwebtoken');
const UserList = require('../models/userlistSchema');
async function emailVerificationController(req,res){
    const {authorization} = req.headers;
    console.log(authorization);
    var decoded = jwt.verify(authorization, 'mamun');
    console.log(decoded.email);
    const updateUser = await UserList.findOneAndUpdate(
        {email: decoded.email},
        {emailVerified: true},
        {new: true}
    )
    res.json(updateUser)
}

module.exports = emailVerificationController;