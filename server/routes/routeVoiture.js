const express = require("express");
const router = express.Router();

const Voiture = require("../models/voiture")
const controller_user = require("../controllers/users");

router.get("/getallcars", async(req, res)=>{

    try {
        const voitures = await Voiture.find({})
        res.send({voitures});

    } catch (error) {
        return res.status(400).json({message:error});
    }


});


module.exports = router;