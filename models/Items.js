const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Items = mongoose.model('item', ItemSchema );