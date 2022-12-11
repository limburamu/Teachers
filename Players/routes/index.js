const { Router } = require('express');
const router = Router();
const playerRoutes = require('./players.routes');

router.use('/players', playerRoutes);

module.exports = router;