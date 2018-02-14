const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chefSchema = new Schema({
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
    },
    experiences: {
        type: Schema.ObjectID, ref: 'Experience'
    }

})

module.exports = mongoose.model('Chef', chefSchema);