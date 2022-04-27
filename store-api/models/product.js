const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    // enum: ['ikea','marcos','liddy','caressa'],
    enum: {
      values: ['ikea','marcos','liddy','caressa'],
      message:'{VALUE} is not valid company name'
    }
  }
});

module.exports = mongoose.model("Task", ProductSchema);