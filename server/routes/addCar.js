const express = require("express");
const router = express.Router();
const controller_car = require("../controllers/addCar");

router.post("/voitures/addcar", controller_car.create_car);
module.exports = router;