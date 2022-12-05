const mongoose = require("mongoose");
const schema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },

});

//we are creating new collection
const newtest =  mongoose.model("Rooman", schema);

module.exports = newtest;