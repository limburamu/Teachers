const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    author: String
});

mongoose.model('Book', bookSchema, 'books');

