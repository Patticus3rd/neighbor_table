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
    },
    chefStory: {
        type: String,
    }

});

chefSchema.methods.withoutPassword = function(){
    let chef = this.toObject();
    delete chef.password;
    return chef;
}

module.exports = mongoose.model('Chef', chefSchema);