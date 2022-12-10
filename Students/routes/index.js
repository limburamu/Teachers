const { Router } = require('express');
const router = Router();
const studentRoutes = require('./students.routes');

router.use('/students', studentRoutes);

module.exports = router;

