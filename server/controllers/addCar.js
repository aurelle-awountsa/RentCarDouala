const Car = require("../models/addCar");

const create_car = (req, res) => {
    console.log(req);

    // vérifier si tous les champs sont remplis

  
     const car= Car ({
        marque: req.body.marque,
        prix: req.body.prix,
        places: req.body.places,
        portiere: req.body.portiere,
        description: req.body.description,
        imageUrl: req.body.imageUrl



    });

     // on enregistre la voiture 
        car
            .save()
            .then(result => {
                 console.log(result);
                 res
                    .status(201)
                    .json({
                        success: true,
                         message: "la voiture a été ajoutée avec succes",
                         car: {
                            carId: result._id,
                            marque: result.marque,
                            prix: result.prix,
                            places: result.places,
                            portiere: result.portiere,
                            description: result.description,
                            imageUrl: result.imageUrl

                        }
                    });
            })

             // s'il y a une erreur dans la fonction save, on envoie status 500
            .catch(err => {
                console.log(err.name);
                                
                res.status(500).json({
                    success: false,
                    error: err.message,
                });
            });
}
                
            

module.exports = {create_car};