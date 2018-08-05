const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const app = express();

// Bodyparser middleware
app.use(bodyParse.json());


//DB config
const db = require('./config/keys').mongoURI;


//connect to mongo db
mongoose.connect(db)
    .then(()=> console.log('Mongoose Connected ..........'))
    .catch(err => console.log(err))
