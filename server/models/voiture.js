const mongoose = require('mongoose');

const sch_voiture = mongoose.Schema({

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
    portieres:{
        type: Number,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    imageUrl:[],
},{
    timestamps : true,

})

const model_voiture = mongoose.model('voiture', sch_voiture)

module.exports = model_voiture