const express = require('express');
const {createCategoryController, createCategoryStatusController, createSubCategoryController, createSubCategoryStatusController, getAllCategoryController, getAllSubCategoryController} = require('../../controller/createCategoryController');
const router = express.Router();

router.post("/createcategory", createCategoryController);
router.post("/createcategorystatus", createCategoryStatusController);
router.post("/createsubcategory", createSubCategoryController);
router.post("/createsubcategorystatus", createSubCategoryStatusController);


router.get("/getallcategory", getAllCategoryController);
router.get("/getallsubcategory", getAllSubCategoryController);

module.exports = router;