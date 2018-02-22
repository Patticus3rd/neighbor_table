const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const expressJwt = require('express-jwt');
const PORT = process.env.PORT || 9000;


//define server ports
const app = express();

//middleware
app.use(morgan())
app.use(bodyParser.json());
app.use(cors());

//import routes

const chefsRoute = require('./routes/chefs.js');
const dinersRoute = require('./routes/diners.js');
const expRoute = require('./routes/experiences.js');
var checkout = require('./routes/checkout');

//connect to mongoose to db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017',
     (err) => {
    if(err) throw err;
    console.log('connected to mongodb')
})

//routes
// app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use('/chefs', chefsRoute);
app.use('/diners', dinersRoute);
app.use('/cuisines', expRoute);
app.use('/checkout', checkout);

app.listen(PORT, () => {
    console.log(`Listening On Port ${PORT} For Your Mama`)
})