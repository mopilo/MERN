const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const path = require('path')

const app = express();

const item = require("./routes/api/item")

// Bodyparser middleware
app.use(bodyParse.json());


//DB config
const db = require('./config/keys').mongoURI;


//connect to mongo db
mongoose
    .connect(db)
    .then(()=> console.log('Mongoose Connected ..........'))
    .catch(err => console.log(err))



// routes
app.use("/api/item", item)


//static assets
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    }
)}


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port} `));