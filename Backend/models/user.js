const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type:String, required: true},
  email: {type:String, required: true, unique: true},
  passwordHash: {type:String, required: true},
  street: {
    type: String,
    required: true
  },
  apartment: String,
  city: {type :String, required: true},
  zip: {type :String, required: true},
  country: {type:String,required: true},
  phone:{ type :Number, required: true},
  isSeller:{type: Boolean, default: false},
});

module.exports = mongoose.model('User', userSchema);
