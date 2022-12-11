const { Router } = require('express');
const router = Router();
const playerRoutes = require('./players.routes');

router.use('/teachers', playerRoutes);

module.exports = router;