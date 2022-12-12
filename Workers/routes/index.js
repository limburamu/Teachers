const { Router } = require('express');
const router = Router();
const workerRoutes = require('./workers.routes');

router.use('/workers', workerRoutes);

module.exports = router;