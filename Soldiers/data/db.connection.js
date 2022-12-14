require('./db.model');
const mongoose = require('mongoose');

const connection = require('../controllers/soldiers.controllers');


mongoose.connect('mongodb://127.0.0.1:27017/soldierRecords');

mongoose.connection.on('connected', function() {
    console.log('mongoose connected');
});
process.on('SIGINT', function() {
    mongoose.disconnect(function() {
        console.log('mongoose disconnected');
        process.exit(0);
    });
});

