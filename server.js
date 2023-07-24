const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const dbConfig = require('./server/db');
const routeVoiture = require('./server/routes/routeVoiture');
const routeUsers = require('./server/routes/users');
const routeAddCar = require('./server/routes/addCar');
app.use('/api/voitures', routeVoiture)
app.use('/api/users', routeUsers)
app.use('/api/cars', routeAddCar)

const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Node Server Started'));