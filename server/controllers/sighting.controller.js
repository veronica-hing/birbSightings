const Sighting = require('../models/sighting.model');

module.exports.findAllSightings = (req, res) =>{
    Sighting.find()
    .then(allSightings =>{
        res.json(allSightings)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.createNewSighting = (req, res) =>{
    Sighting.create(req.body)
    .then(newlyCreatedSighting =>{
        res.json(newlyCreatedSighting)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.findOneSighting = (req, res) =>{
    Sighting.findOne({_id: req.params.id})
    .then(sighting =>{
        res.json(sighting)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.updateOneSighting = (req, res) =>{
    Sighting.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedSighting =>{
        res.json(updatedSighting)
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.deleteSighting = (req, res) =>{
    Sighting.deleteOne({_id: req.params.id})
    .then(sighting =>{
        res.json(sighting)
    })
    .catch(err=>{
        res.json(err)
    })
}