const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('card', cardSchema);