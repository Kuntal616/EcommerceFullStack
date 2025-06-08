const express = require('express');
const router = express.Router();
const { createCategory, getCategory, getCategoryByID, updateCategory, deleteCategory } = require('../controllers/category');    
const { protect, seller} = require('../middlewares/auth');

router.post('/create',protect,seller, createCategory)
.get('/', getCategory)
.get('/:id', getCategoryByID)
.put('/:id',protect,seller, updateCategory)
.delete('/:id', protect,seller,deleteCategory);

module.exports = router;
