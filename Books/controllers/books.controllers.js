const booksController = {};



const mongoose = require('mongoose');
const Book = mongoose.model('Book');

booksController.getBooks = function(req, res) {
    Book.find(function(error, data){
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(data);
        }
    });
}

booksController.getBookById = function(req, res) {
    const bookId = req.params.bookId;
    if(mongoose.isValidObjectId(bookId)) {
    Book.findById(bookId).exec(function(error, data) {
        if(error) {
            console.log(error)
            res.status(500).json(error)
        } else {
            if(data) {
                res.status(200).json(data);
            } else {
                res.status(404).json('Book with given id not found');
            }
        }
    });    
    } else {
        res.status(500).json('Book id not valid');
    }
}


booksController.addBook = function(req, res) {
    console.log(req.body);
    // Book.push(req.body);
    // res.status(201).send('Book added');
    let db = req.body;
    db.collection('books')
    .insertOne(book)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json({error: 'Could not add a new document'})
    })
}

module.exports = booksController;