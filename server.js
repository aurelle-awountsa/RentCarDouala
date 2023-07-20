const express = require("express");
//const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const dbConfig = require('./server/db');
const routeVoiture = require('./server/routes/routeVoiture');
const routeUsers = require('./server/routes/users');
//app.use(cors());
app.use('/api/voitures', routeVoiture)
app.use('/api/users', routeUsers)
const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Node Server Started'));