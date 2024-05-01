const mongoose = require('mongoose');
const {Schema} = mongoose;

const storeSchema = new Schema({
    storeName: {
        type: String,
        required: true
    },
    officialEmail: {
        type: String,
        required: true
    },
    officialPhone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "UserList"
    },
    products: [
       {
        type: Schema.Types.ObjectId,
        ref: "Product"
       }
],
    created:{
        type: Date,
        default: new Date()
    },
    updated:{
        type: Date
    }
})

module.exports = mongoose.model("Store", storeSchema);