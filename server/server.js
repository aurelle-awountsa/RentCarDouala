const express = require("express");
//const cors = require("cors");
const app = express();
const dbConfig = require('./db');
const routeVoiture = require('./routes/routeVoiture');
//const routeUsers = require('./routes/users');
//app.use(cors());
app.use('/api/voitures', routeVoiture)
// app.use('/api/users', routeUsers)
const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Node Server Started'));