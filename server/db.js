const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://aurelle:Tchefy-Julia2022@cluster0.kfpprsn.mongodb.net/rent-car-douala"
mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected', () => {
    console.log('Mongo DB connection successful')
})

module.exports = mongoose