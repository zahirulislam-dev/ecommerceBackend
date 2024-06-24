const productSchema = require("../models/productSchema");
const userlistSchema = require("../models/userlistSchema");
const variantSchema = require("../models/variantSchema");

// async function secureProductUploadController(req, res, next){
//     const userId = (req.headers.authorization.split("@"))[1];
//     const password = (req.headers.authorization.split("@"))[2];
//     console.log(userId);
//     console.log(password);

//     if(!req.headers.authorization){
//         res.json({error: "Authorization Failed"});
//     }

//    if(!userId){
//     res.json({error: "You Are Unauthorized"});
//    }else{
//     const user = await userlistSchema.find({_id: userId});
//    if(user.length > 0){
//     if(password == "123456"){
//         if(user[0].role == "merchant"){
//             next();
//         }else{
//             res.json({error: "You are not able to create product"});
//         }
//     }else{
//         res.json({error: "Unauthorized"});  
//     }
//    }else{
//     res.json({error: "Unauthorized"});
//    }
//    }
// }

 
async function createProductController (req, res){
    const {productName, description, storeName} = req.body;
    const product = await new productSchema({
        productName,
        description,
        storeName  
    })
    product.save();
    res.json({success: "Product Create Successfull"})
}

async function createVariantController (req, res){
    const {color, image, storage, ram, size, price, quantity, product} = req.body;
    const variant = await new variantSchema ({
        color, 
        image: `http://localhost:3000/upload/${req.file.filename}`, 
        storage, 
        ram, 
        size,
        price,
        quantity,
        product
    });
    variant.save();
    await productSchema.findOneAndUpdate(
        {_id: variant.product},
        {$push: {variants: variant._id}},
        {new: true},
    )
    res.json({success: "Variant Create Successfull"})
}

async function deleteProductController (req, res){
    const data = await productSchema.findByIdAndDelete(req.body.id)
    res.send({success: "Product Delete Successfully Done"})
}

async function getAllProductController (req, res){
    const data = await productSchema.find({}).populate("storeName")
    res.send(data)
}

async function getAllVariantController (req, res){
    const data = await variantSchema.find({});
    res.send(data)
}
module.exports = {
    // secureProductUploadController, 
    createProductController, 
    createVariantController, 
    getAllProductController, 
    deleteProductController,
    getAllVariantController};