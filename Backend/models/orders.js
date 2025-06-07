const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  orderItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderItem'
  }],
  shippingAddress1: {type:String, requires:true},
  shippingAddress2: String,
  city: {type:String,required:true},
  zip: {type:String,requied:true},
  country: {type:String,required:true},
  phone: {type:Number, required:true},
  status: {
    type: String,
    required: true,
    default: 'Pending',
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
  },
  totalPrice: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateOrdered: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
