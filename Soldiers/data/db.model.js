const mongoose = require('mongoose');

const soldierSchema = mongoose.Schema({
    firstname: String,
    lastname: String
});

mongoose.model('Soldier', soldierSchema, 'soldiers');