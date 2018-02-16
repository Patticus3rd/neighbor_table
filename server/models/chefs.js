const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chefSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    chefStory: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('Chef', chefSchema);