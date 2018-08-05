const express = require('express');
const router = express.Router();

//item models
const Item = require('../../models/Items')

// get
router.get('/', (req, res)=>{
    Item.find()
    .sort({date: -1})
        .then(item => res.json(item))
});


module.exports = router