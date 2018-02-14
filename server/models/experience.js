const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    expName: {
        type: String,
        required: true
    },
    expLocation: {
        type: String,
        required: true
    },
    expChef: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pictures: {
        type: [String]
    },

})

module.exports = mongoose.model('Experience', experienceSchema);