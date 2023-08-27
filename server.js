const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const dbConfig = require('./server/config/db');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const routeVoiture = require('./server/routes/routeVoiture');
const routeUsers = require('./server/routes/users');
const routeAddCar = require('./server/routes/addCar');


//config passport
app.use(passport.initialize());
app.use(passport.session());

//Utilisation de la librairie passport
require('./server/config/passportConfig')(passport);

app.use(express.static(path
    .join(__dirname, 'server', 'public', 'dist')));

app.get('/', (req, res) => {
    return res.sendFile(path
        .join(__dirname + '/server', 'public', 'dist', 'index.html'));
});

app.use('/api/voitures', routeVoiture)
app.use('/api/users', routeUsers)
app.use('/api/cars', routeAddCar)

app.get('*', (req, res) => {
    return res.sendFile(path
        .join(__dirname + '/server', 'public', 'dist', 'index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Node Server Started'));