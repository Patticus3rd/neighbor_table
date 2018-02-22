const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    expName: {
        type: String,
        required: true
    },
    expCity: {
        type: String,
        required: true
    },
    expState: {
        type: String,
        required: true
    },
    expChef: {
        type: Schema.Types.ObjectId,
        ref: "Chef"
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