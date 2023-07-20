const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require("../models/users");

const create_user = (req, res) => {

    // vérifier si tous les champs sont remplis

    if (!req.body.lastName  || !req.body.firstname || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({
                success: false,
                message: "All fields required"
            });
    }


    // requête vers la db afin de trouver si y a un email deja existant

    User.find({ email: "req.body.email"})
        .exec()
        .then(user => {

            console.log(user);

            if (user.length == 1) {
                return res
                    .status(409)
                    .json({
                        success: false,
                        message: "le nom d'utilisateur ou le mail existe déjà"
                    });
            } else {

                // hashage du mot de passe
                bcrypt.hash(req.body.password, 10, (err, hash) => {

                    // vérifier s'il y a une erreur dans le hashage du mot de passe
        
                    if (err) {
                        return res
                            .status(500)
                            .json({error: err});

                        // s'il y a pas d'erreur dans le hashage du mot de passe, on donne le hash comme mot de passe de l'utilisateur 
                    } else {
                        const user = new User({
                            lastName: req.body.lastName,
                            firstname: req.body.firstname,
                            email: req.body.email,
                            password: hash
                        });

                        // on enregistre l'utilisateur avec un mot de passe hashé
                        user
                            .save()
                            .then(result => {
                               console.log(result);
                                res
                                    .status(201)
                                    .json({
                                        success: true,
                                        message: "l'utilisateur a été créé avec succes",
                                        user: {
                                            userId: result._id,
                                            lastName: result.lastName,
                                            firstname: result.firstname,
                                            userEmail: result.email,
                                            userPassword: result.password
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
                });
            }
        })
};

module.exports = create_user;