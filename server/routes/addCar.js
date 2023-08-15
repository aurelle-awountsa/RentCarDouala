const express = require("express");
const router = express.Router();
const controller_car = require("../controllers/addCar");

router.post("cars/addcar", controller_car.create_car);
module.exports = router;