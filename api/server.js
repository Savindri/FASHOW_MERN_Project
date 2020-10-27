const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4002;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const paymentRoutes = require('./payment.route');
const deliveryRoute = require('./delivery.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true})); //use the middleware of body parser
app.use(bodyParser.json());

app.use('/payment', paymentRoutes);
app.use('/delivery', deliveryRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});