const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const dbConfig = require('./server/config/db');
const routeVoiture = require('./server/routes/routeVoiture');
const routeUsers = require('./server/routes/users');
const routeAddCar = require('./server/routes/addCar');


//config passport
app.use(passport.initialize());
app.use(passport.session());

//Utilisation de la librairie passport
require('./server/config/passportConfig')(passport);

app.use('/api/voitures', routeVoiture)
app.use('/api/users', routeUsers)
app.use('/api/cars', routeAddCar)

const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Node Server Started'));