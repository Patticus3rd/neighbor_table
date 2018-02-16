const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dinerSchema = new Schema({
    email: {
        type: String,
        reqired: true,
        unique: true,
        lowercase: true
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
        required: true
    },
    profilePicture: {
        type: String,
    },
    profession: {
        type: String,
        required: true
    }, 
    aboutMe: {
        type: String,
        required: true
    },
    foodPreferences: {
        type: String,
    }
})

module.exports = mongoose.model('Diner', dinerSchema);
