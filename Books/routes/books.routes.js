const { Router } = require('express');
const router = Router();

const booksController = require('../controllers/books.controllers');


router.route('/')
    .get(booksController.getBooks)
    .post(booksController.addBook)


router.route('/:bookId')
    .get(booksController.getBookById)
    
    
module.exports = router;    

