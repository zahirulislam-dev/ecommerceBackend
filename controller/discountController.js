const discountSchema = require("../models/discountSchema");

function createDiscountController(req,res) {
    const {cash, percent, flat, product, category, subCategory} = req.body;
    const discount = new discountSchema({
        cash, 
        percent, 
        flat, 
        product, 
        category, 
        subCategory 
    });
    discount.save();
    res.send({success: "Discount Create Successfully Done"});
}

// GET DISCOUNT CONTROLLER 
// ========================
async function getDiscountController (req, res){
    const discount = await discountSchema.find({}).polulate(["product", "category", subCategory]);
    res.send(discount);
}

module.exports = {createDiscountController, getDiscountController};