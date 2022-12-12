const workersController = {};

const mongoose = require('mongoose');
const Worker = mongoose.model('Worker');

workersController.getWorkers = function(req, res) {
    Worker.find(function(error, data) {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(data);
        }
    });
};

workersController.getWorkerById = function(req, res) {
    const workerId = req.params.workerId;
    if(mongoose.isValidObjectId(workerId)) {
        Worker.findById(workerId).exec(function(error, data) {
            if(error) {
                console.log(error);
                res.status(500).json(error);
            } else {
                if(data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json('Worker with given id is not found');
                }
            }
        });
    } else {
        res.status(500).json('Worker id not valid');
    }
}

workersController.addWorker = function(req, res) {
    Worker.create(req.body, function(error, data) {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(data);
        }
    });
};

workersController.deleteWorkerById = function(req, res) {
    const workerId = req.params.workerId;
    Worker.deleteOne({_id: workerId}, function(error, data) {
        if(error) {
            res.status(500).json(error);
        } else {
            if(data.deleteCount === 0) {
                res.status(404).json('Worker with given id is not found');
            } else {
                res.status(200).json('Worker with given id is deleted');
            }
        }
    });
};

workersController.updateWorkerById = function(req, res) {
    Worker.findByIdAndUpdate(req.params.workerId, req.body, function(error, data) {
        if(error) {
            res.status(404).json('Worker with given id is not found');
        } else {
                res.status(200).json('Worker with the given id is updated');
        }
    });
};




module.exports = workersController;


// Worker.findByIdAndUpdate(req.params.workerId, req.body, function(error, data){

// })