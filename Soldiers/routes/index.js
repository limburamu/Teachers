const { Router } = require('express');
const router = Router();
const soldierRoutes = require('./soldiers.routes');


router.use('/soldiers', soldierRoutes);

module.exports = router;

