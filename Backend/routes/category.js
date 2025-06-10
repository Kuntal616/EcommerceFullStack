const express = require('express');
const router = express.Router();
const { createCategory, getCategory, getCategoryByID, updateCategory, deleteCategory } = require('../controllers/category');    
const { protect, seller} = require('../middlewares/auth');
const upload = require('../middlewares/upload');

router.post('/create',protect,seller,upload.single('image'), createCategory)
.get('/', getCategory)
.get('/:id', getCategoryByID)
.put('/:id',protect,seller,upload.single('image'), updateCategory)
.delete('/:id', protect,seller,deleteCategory);

module.exports = router;
