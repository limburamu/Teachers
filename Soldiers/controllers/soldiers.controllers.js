const soldiersController = {};

const mongoose = require('mongoose');
const Soldier = mongoose.model('Soldier');

soldiersController.getSoldiers = function(req, res) {
    Soldier.find(function(error, data) {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(data);
        }
    });
};

soldiersController.getSoldierById = function(req, res) {
    const soldierId = req.params.soldierId;
    if(mongoose.isValidObjectId(soldierId)) {
        Soldier.findById(soldierId).exec(function(error, data) {
            if(error) {
                console.log(error);
                res.status(500).json(error);
            } else {
                if(data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json('Soldier with given id is not found');
                }
            }
        });
    } else {
        res.status(500).json('Soldier id not valid');
    }
};

soldiersController.addSoldier = function(req, res) {
    Soldier.create(req.body, function(error, data) {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(data);
        }
    });
};

soldiersController.deleteSoldierById = function(req, res) {
    const soldierId = req.params.soldierId;
    Soldier.deleteOne({_id: soldierId}, function(error, data) {
        if(error) {
            res.status(500).json(error);
        } else {
            if(data.deletedCount === 0) {
                res.status(404).json('Soldier with given id is not found');
            } else {
                res.status(200).json('Soldier with given id is deleted');
            }
        }
    });
};


soldiersController.updateSoldierById = function(req, res) {
    Soldier.findByIdAndUpdate(req.params.soldierId, req.body, function(error, data) {
        if(error) {
            res.status(404).json('Soldier with given id is not found');
        } else {
                res.status(200).json('Soldier with the given id is updated');
        }
    });
};


module.exports = soldiersController;