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


//post
router.post('/', (req, res)=>{
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item => res.json(item))
});

router.delete('/:id', (req, res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false }))
})



module.exports = router