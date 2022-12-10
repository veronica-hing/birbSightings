const mongoose = require('mongoose');

const SightingSchema = new mongoose.Schema({
    reporter:{
        type: String,
        required: [true, "We need to know who saw it"],
        minlength: [2,"We need to know who saw the birb"]
    },
    location:{
        type: String,
        required: [true, "We need to know where the birb was"],
        minlength: [2,"Location needs to be more than 2 characters long"]
    },
    date:{
        type: Date,
        required:[true, "We need to know when this happened"]
    },
    description:{
        type: String,
        required: [true, "Come on, we need the details!"],
        minlength: [5, "Never heard of a story shorter than 5 characters. Do better"]
    },
    quantity:{
        type: Number,
        required: [true, "Need to know how many birbs"],
        min: [1,"minimum number reported is 1"]
    }
}, {timestamps: true})

const Sighting = mongoose.model('Sighting', SightingSchema);
module.exports = Sighting;