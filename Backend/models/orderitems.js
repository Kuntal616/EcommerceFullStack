const mongoose = require('mongoose');
const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number
});

module.exports = mongoose.model('OrderItem', orderItemSchema);
// This schema defines the structure for order items in the database.