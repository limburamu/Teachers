const { Router } = require('express');
const router = Router();
const bookRoutes = require('./books.routes');



router.use('/books', bookRoutes);

module.exports = router;

