const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for delivery
let delivery = new Schema({
  date: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  nic: {
    type: String
  },
  mobile: {
    type: Number
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  type: {
    type: String
  }
  

  
},{
    collection: 'deliverymen'
});

module.exports = mongoose.model('deliverymen', delivery);