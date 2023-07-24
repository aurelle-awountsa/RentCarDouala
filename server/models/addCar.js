const mongoose = require('mongoose');

const cars = mongoose.Schema({

    marque:{
        type: String,
        require: true
    },
    prix:{
        type: Number,
        require:true
    },
    places:{
        type: Number,
        require:true
    },
    portiere:{
        type: Number,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    imageUrl:[]
    
});

const model_car= mongoose.model('car', cars);

module.exports = model_car