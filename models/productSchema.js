const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = new Schema({
    name: {
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
        ref: "variant",
    }
    ],
    store: {
        type: Schema.Types.ObjectId,
        ref: "store", 
    },
    created:{
        type: Date,
        default: new Date(),
    },
    updated:{
        type: Date,
    }
})

module.exports = mongoose.model("product", productSchema);