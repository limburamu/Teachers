const booksController = {};

// const connection = require('../data/db.connection');


const mongoose = require('mongoose');
const Book = mongoose.model('Book');

booksController.getBooks = function (req, res) {
    Book.find(function (error, data) {
        if (error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(data);
        }
    });
}

booksController.getBookById = function (req, res) {
    const bookId = req.params.bookId;
    if (mongoose.isValidObjectId(bookId)) {
        Book.findById(bookId).exec(function (error, data) {
            if (error) {
                console.log(error)
                res.status(500).json(error)
            } else {
                if (data) {
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


booksController.addBook = function (req, res) {


    Book.create(req.body, function (error, data) {
        if (error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(data);
        }
    })

};

booksController.deleteBookById = function (req, res) {
    const bookId = req.params.bookId;
    Book.deleteOne({ _id: bookId }, function (error, data) {
        if (error) {
            res.status(500).json(error);
        } else {
            if (data.deletedCount === 0) {
                res.status(404).json('Book with given id is not found');
            } else {
                res.status(200).json('Book with given id is deleted');
            }
        }
    });
};

module.exports = booksController;