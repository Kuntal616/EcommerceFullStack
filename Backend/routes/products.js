const express = require('express');
const { listProducts, getProductById, createProduct, deleteProduct, updateProduct } = require('../controllers/products');
const { protect, seller} = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const router = express.Router();


router.get('/', listProducts)
.post('/', protect,seller,upload.array('images', 5), createProduct)
.get('/:id', getProductById)
.put('/:id', protect,seller,upload.array('images', 5), updateProduct)
.delete('/:id', protect,seller, deleteProduct);

module.exports = router;