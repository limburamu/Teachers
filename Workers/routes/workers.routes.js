const { Router } = require('express');
const router = Router();

const workersController = require('../controllers/workers.controllers');

router.route('/')
    .get(workersController.getWorkers)
    .post(workersController.addWorker)


router.route('/:workerId')
    .get(workersController.getWorkerById)
    .delete(workersController.deleteWorkerById) 
    .put(workersController.updateWorkerById)
    
    
module.exports = router;    