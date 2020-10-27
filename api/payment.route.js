const express = require('express');
const paymentRoutes = express.Router();

// Require Payment model in our routes module
let Payment = require('./payment.model');

// Defined store route
paymentRoutes.route('/add').post(function (req, res) {
  let payment = new Payment(req.body);
  payment.save()
    .then(payment => {
      res.status(200).json({'payment': 'payment added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
paymentRoutes.route('/').get(function (req, res) {
    Payment.find(function(err, payments){
    if(err){
      console.log(err);
    }
    else {
      res.json(payments);
    }
  });
});

// Defined delete | remove | destroy route
paymentRoutes.route('/delete/:id').get(function (req, res) {
    Payment.findByIdAndRemove({_id: req.params.id}, function(err, payment){
        if(err) res.json(err);
        else res.json('Successfully Removed');
    });
});

module.exports = paymentRoutes;