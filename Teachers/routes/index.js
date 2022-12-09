const { Router } = require('express');
const router = Router();
const teacherRoutes = require('./teachers.routes');

router.use('/teachers', teacherRoutes);

module.exports = router;