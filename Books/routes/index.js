const { Router } = require('express');
const router = Router();
const bookRoutes = require('./books.routes');



router.use('/books', bookRoutes);

// const { Router } = require('express')
// const router = Router();
// const booksController = require('../controllers/books.controller');
// const bookRoutes = require('./books.routes')

// router.use('/books', bookRoutes)

module.exports = router;

