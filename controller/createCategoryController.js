const CategoryList = require("../models/categorySchema");
const SubCategoryList = require("../models/subCategorySchema");


// CREATE CATEGORY CONTROLLER
// ===============================

async function createCategoryController(req,res){
    const {name, description} = req.body;
    const duplicateCategory = await CategoryList.find({name});
    if(duplicateCategory.length>0){
        return res.json({error: "This Category is Already Exist"})
    }
    const category = new CategoryList({
        name,
        description
    })
    category.save()
    res.send({success: "Category Created Successfully Done"})
}

// CREATE CATEGORY STATUS CONTROLLER
// =================================

async function createCategoryStatusController(req,res){
    console.log("Ami Category Status");
    const {name,status} = req.body
    if(status == 'pending' || status == 'rejected'){
        const updateCategoryStatus =await CategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:false, status:status}},
            {new:true}
        )
        res.json({success: "Category Status Successfully Updated"})
    }else if(status == 'approved'){
        const updateCategoryStatus =await CategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:true, status:status}},
            {new:true}
        )
        res.json({success: "Category Status Successfully Approved"}) 
    }
}


// CREATE SUB CATEGORY CONTROLLER
// ===============================

async function createSubCategoryController(req,res){
    const {name, description, category} = req.body;
    const duplicateSubCategory = await SubCategoryList.find({name});
    if(duplicateSubCategory.length>0){
        return res.json({error: "This Sub Category is Already Exist"})
    }
    const subCategory = new SubCategoryList({
        name,
        description,
        category

    })
    await CategoryList.findOneAndUpdate(
        {_id: subCategory.category},
        {$push:{subCategory: subCategory._id}},
        {new:true}
    )
    subCategory.save()
    res.send({success: "Sub Category Created Successfully Done"})
}


// CREATE SUB CATEGORY STATUS CONTROLLER
// =====================================

async function createSubCategoryStatusController(req,res){
    console.log("Ami SubCategory Status");
    const {name,status} = req.body
    if(status == 'pending' || status == 'rejected'){
        const updateSubCategoryStatus =await SubCategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:false, status:status}},
            {new:true}
        )
        res.json({success: "Sub Category Status Successfully Updated"})
    }else if(status == 'approved'){
        const updateSubCategoryStatus =await SubCategoryList.findOneAndUpdate(
            {name},
            {$set:{isActive:true, status:status}},
            {new:true}
        )
        res.json({success: "Sub Category Status Successfully Approved"}) 
    }
}


// GET ALL CATEGORY CONTROLLER
// ============================

async function getAllCategoryController(req,res){
    const category =await CategoryList.find({}).populate("subCategory")
    res.send(category);
}

// GET ALL SUB CATEGORY CONTROLLER
// ================================

async function getAllSubCategoryController(req,res){
    const subCategory =await SubCategoryList.find({})
    res.send(subCategory);
}

module.exports = {createCategoryController, createCategoryStatusController, createSubCategoryController, createSubCategoryStatusController, getAllCategoryController, getAllSubCategoryController};