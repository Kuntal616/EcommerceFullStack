const express = require('express');
const { listProducts, getProductById, createProduct, deleteProduct, updateProduct } = require('../controllers/products');
const { protect, seller} = require('../middlewares/auth');
const router = express.Router();


router.get('/', listProducts)
.post('/', protect,seller, createProduct)
.get('/:id', getProductById)
.put('/:id', protect,seller, updateProduct)
.delete('/:id', protect,seller, deleteProduct);

module.exports = router;