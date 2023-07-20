const mongoose = require('mongoose');

const user = mongoose.Schema({

    lastName:{
        type: String,
        require: true
    },
    firstName:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    }
    
});

const model_user= mongoose.model('user', user);

module.exports = model_user