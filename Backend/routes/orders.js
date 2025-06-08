const express = require('express');
const router = express.Router();
const {
    createOrder,
    getMyOrders,
    getOrderById,
    updateOrderStatus
} = require('../controllers/orders');
const { protect, seller } = require('../middlewares/auth');

router.post('/', protect, createOrder)
    .get('/my-orders', protect, getMyOrders)
    .get('/:id', protect, getOrderById)
    .put('/:id', protect, seller, updateOrderStatus);

module.exports = router;
