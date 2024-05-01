const mongoose = require('mongoose');
const {Schema} = mongoose;


const variantSchema = new Schema({
    color: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    storage: {
        type: String,
    },
    ram: {
        type: String,
    },
    size: {
        type: String,
    },
    price: {
        type: String,
        // required: true,
    },
    quantity: {
        type: String,
        // required: true,
    },
    product: {
        type: String,
        ref: "Product",
        required: true,
    },
    created:{
        type: Date,
        default: new Date(),
    },
    updated:{
        type: Date,
    }
})

module.exports = mongoose.model("Variant", variantSchema);