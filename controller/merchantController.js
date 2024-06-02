const MerchantList = require("../models/merchantSchema");
const UserList = require("../models/userlistSchema");

async function becomeMerchantController(req,res){
    const {storeName, officialEmail, officialPhone, address, owner} = req.body;
    console.log(storeName, officialEmail, officialPhone, address, owner);

    const merchant = new MerchantList({
        storeName, officialEmail, officialPhone, address, owner 
    });
    merchant.save();

    await UserList.findByIdAndUpdate(
        {_id: owner},
        {role: "merchant"},
        {new: true}
    );
    res.json({success: "Congratulations. Now you are a Merchant"})
}

async function getAllStoreListController(req, res){
    const data = await MerchantList.find({})
    res.send(data)
}

module.exports = {becomeMerchantController, getAllStoreListController};