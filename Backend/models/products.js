const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type:String, required: true},
  description:{type:String, required:true},
  richDescription: String,
  image: {type:String, required:true},
  images: [String],
  brand: {type:String, required:true},
  price: {type:Number, requied:true},
  discount: {type:Number, default:0},
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  countInStock: {type:Number, required:true, min:0},
  rating: Number,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
