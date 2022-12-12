const { Router } = require('express');
const router = Router();

const soldiersController = require('../controllers/soldiers.controllers');

router.route('/')
    .get(soldiersController.getSoldiers)
    .post(soldiersController.addSoldier)


router.route('/:soldierId')
    .get(soldiersController.getSoldierById)
    .delete(soldiersController.deleteSoldierById)
    .put(soldiersController.updateSoldierById)
    
    
module.exports = router;    