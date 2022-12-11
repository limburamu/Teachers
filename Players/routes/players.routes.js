const { Router } = require('express');
const router = Router();
const playersController = require('../controllers/players.controller');

router.route('/')
    .post(playersController.addPlayer)
    .get(playersController.getPlayers);


router.route('/:playerId')
    .get(playersController.getPlayer)
    .delete(playersController.deletePlayer)
    .put(playersController.updatePlayer);


router.route('/:playerId/clubs')
    .get(playersController.getClubs);
    
    
router.route('/:playerId/clubs/:clubId')
    .get(playersController.getClub);    


module.exports = router;    
