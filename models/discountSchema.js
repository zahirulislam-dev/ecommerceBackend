const mongoose = require('mongoose');
const {Schema} = mongoose;


const discountSchema = new Schema ({
    cash: {
        type: Number,
    },
    percent: {
        type: Number,
    },
    flat: {
        type: Boolean,
        default: false,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "product",
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "categoryList",
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: "subCategoryList",
    },
    created:{
        type: Date,
        default: new Date()
    },
    updated:{
        type: Date
    }
})

module.exports = mongoose.model("Discount", discountSchema);