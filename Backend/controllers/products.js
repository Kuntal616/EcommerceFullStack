const product = require('../models/products');
const category = require('../models/category');
// Product creation can be done by only admin/seller
async function createProduct(req, res) {
    try {
       const newProduct = await product.create(req.body); 
       res.status(201).json({newProduct, message: "Product created successfully"});
    } catch (error) {
        res.status(500).json({message: "Error creating product", error: error.message});
    }
}
// List all products with category details
async function listProducts(req, res) {
    try {
        const products = await product.find().populate('category', 'name');
        res.status(200).json({message: "Products fetched successfully", products});
    } catch (error) {
        res.status(500).json({message: "Error fetching products", error: error.message});
    }
}
// Get product by ID
 async function getProductById(req, res) { 
    try {
         const product = await Product.findById(req.params.id).populate('category', 'name');
            if (!product) {
                return res.status(404).json({message: "Product not found"});
            }
        res.status(200).json({message: "Product fetched successfully", product});
    } catch (error) {
        res.status(500).json({message: "Error fetching product", error: error.message});
    }
}
// Update product by ID
async function updateProduct(req, res) {
   try {
    const updatedProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    if (!updatedProduct) {
        return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message: "Product updated successfully", updatedProduct});
   } catch (error) {
    res.status(500).json({message: "Error updating product", error: error.message});
   }
}
// Delete product by ID
async function deleteProduct(req, res) {
    try {
        const deletedProduct = await product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully", deletedProduct});
    } catch (error) {
        res.status(500).json({message: "Error deleting product", error: error.message});
        
    }
}


module.exports = {
    listProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
};