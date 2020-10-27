const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
  // Define collection and schema for payment and delivery
  let Payment = new Schema({
    date: {
      type: String,
      required: true
    },
    first_name: { 
      type: String, 
      required: true,
      minlength: 2 
    },
    last_name: { 
      type: String, 
      required: true,
      minlength: 2  
    },
    mobile: { 
      type: String, 
      required: true,
      minlength: 10
    },
    address: {
      type: String
    },
    deli_meth: { 
      type: String, 
      required: true 
    },    
    pay_meth: { 
      type: String, 
      required: true 
    },
    ord_cha: { 
      type: Number 
    },
    deli_cha: { 
      type: Number 
    },
    tot_pay: { 
      type: Number 
    },
       
    
  }, {
    collection: 'payment'
  });
  
  module.exports = mongoose.model('Payment', Payment);
  