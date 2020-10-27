const express = require('express');
const deliveryRoutes = express.Router();

// Require delivery model in our routes module
let Delivery = require('./delivery.model');

// Defined store route
deliveryRoutes.route('/add').post(function (req, res) {
  let delivery = new Delivery(req.body);
  delivery.save()
    .then( delivery => {
      res.status(200).json({'delivery': 'delivery is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
deliveryRoutes.route('/').get(function (req, res) {
    Delivery.find(function(err, delivery){
    if(err){
      console.log(err);
    }
    else {
      res.json(delivery);
    }
  });
});

// Defined edit route
deliveryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Delivery.findById(id, function (err, delivery){
      res.json(delivery);
  });
});

//  Defined update route
deliveryRoutes.route('/update/:id').post(function (req, res) {
    Delivery.findById(req.params.id, function(err, delivery) {
    if (!delivery)
      res.status(404).send("data is not found");
    else {
        delivery.date = req.body.date;
        delivery.first_name = req.body.first_name;
        delivery.last_name = req.body.last_name;
        delivery.nic = req.body.nic;
        delivery.mobile = req.body.mobile;
        delivery.email = req.body.email;
        delivery.gender = req.body.gender;
        delivery.type = req.body.type;

        delivery.save().then(delivery => {
          res.json('Update completed');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
deliveryRoutes.route('/delete/:id').get(function (req, res) {
    Delivery.findByIdAndRemove({_id: req.params.id}, function(err, delivery){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = deliveryRoutes;