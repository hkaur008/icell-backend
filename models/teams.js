const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamsSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email : {
        type: String,
        required: true
    },
    linkedin_url : {
        type: String,
        
    },
    instagram_url : {
        type: String,
    },
    image : {
        type: String,
        required: true
    },
    position_holding : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        
    }

});

module.exports = mongoose.model('Teams',teamsSchema);