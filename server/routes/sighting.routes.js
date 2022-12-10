const SightingController = require("../controllers/sighting.controller");

//get, post, put, delete
module.exports = (app) =>{
    app.get("/api/sightings/test", (req,res) => {res.json({message:"Howdy!"})});// just for testing purposes
    app.get("/api/sightings", SightingController.findAllSightings);
    app.post("/api/sightings", SightingController.createNewSighting);
    app.get("/api/sightings/:id", SightingController.findOneSighting);
    app.put("/api/sightings/:id", SightingController.updateOneSighting);
    app.delete("/api/sightings/:id", SightingController.deleteSighting);
}