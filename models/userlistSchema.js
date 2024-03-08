const mongoose = require('mongoose');
const {Schema} = mongoose;

const userlistSchema = new Schema ({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile: String,
    presentAddress: String,
    permanentAddress: String,
    city: String,
    postcode: String,
    division: String,
    District: String,
    password: String,
    emailVerified:{
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "merchant"]
    },
    created:{
        type: Date,
        default: new Date()
    },
    updated:{
        type: Date
    }
})

module.exports = mongoose.model('UserList', userlistSchema)