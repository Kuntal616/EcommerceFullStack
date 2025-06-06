const express = require('express');
const { listProducts, getProductById, createProduct, deleteProduct, updateProduct } = require('../controllers/products');
const router = express.Router();

router.get('/', listProducts)
.post('/', createProduct)
.get('/:id', getProductById)
.put('/:id', updateProduct)
.delete('/:id', deleteProduct);

module.exports = router;