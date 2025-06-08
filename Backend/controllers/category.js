const category = require('../models/category');

async function createCategory(req, res) {
    try {
        const newCategory = await category.create(req.body);
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: newCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating category",
            error: error.message
        });
    }
}
async function getCategory (req,res){
    try {
        const categories = await category.find();
        res.status(200).json({
            success: true,
            message: "Categories fetched successfully",
            data: categories
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching categories",
            error: error.message
        });
        
    }
}
async function getCategoryByID (req,res){
    try {
        const categoryById = await category.findById(req.params.id);
        if (!categoryById) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Category fetched successfully",
            data: categoryById
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching category by ID",
            error: error.message
        });
        
    }
}
async function updateCategory (req,res){
    try {
        const updatedCategory = await category.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: updatedCategory
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating category",
            error: error.message
        });
        
    }

}
async function deleteCategory (req,res){
    try {
        const deletedCategory = await category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: deletedCategory
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting category",
            error: error.message
        });
        
    }
}
module.exports = {
    createCategory,
    getCategory,
    getCategoryByID,
    updateCategory,
    deleteCategory
};