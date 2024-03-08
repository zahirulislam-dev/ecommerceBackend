const express = require('express');
const {createCategoryController, createCategoryStatusController, createSubCategoryController, createSubCategoryStatusController, getAllCategoryController, getAllSubCategoryController} = require('../../controller/createCategoryController');
const router = express.Router();

router.post("/createCategory", createCategoryController);
router.post("/createCategoryStatus", createCategoryStatusController);
router.post("/createSubCategory", createSubCategoryController);
router.post("/createSubCategoryStatus", createSubCategoryStatusController);


router.get("/getAllCategory", getAllCategoryController);
router.get("/getAllSubCategory", getAllSubCategoryController);

module.exports = router;