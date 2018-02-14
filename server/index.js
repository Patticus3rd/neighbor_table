const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes


//define server ports
const app = express ();
let port = 9000;

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes


//connect to mongoose to db
mongoose.connect('mongodb://localhost:27017', (err) => {
    if(err) throw err;
    console.log('connected to mongodb')
})

app.listen(port, () => {
    console.log('Listening On Port 900 For Your Mama')
})