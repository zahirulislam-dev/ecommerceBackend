const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    variants: [
    {
        type: Schema.Types.ObjectId,
        ref: "Variant",
    }
    ],
    storeName: {
        type: Schema.Types.ObjectId,
        ref: "Store", 
    },
    created:{
        type: Date,
        default: new Date(),
    },
    updated:{
        type: Date,
    }
})

module.exports = mongoose.model("Product", productSchema);