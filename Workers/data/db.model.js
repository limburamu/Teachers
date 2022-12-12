const mongoose = require('mongoose');

const workerSchema = mongoose.Schema({
    firstname: String,
    lastname: String
});

mongoose.model('Worker', workerSchema, 'workers');