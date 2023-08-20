//const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require("../models/users");
const jwt = require("jsonwebtoken");

//création de compte
const create_user = (req, res) => {
    console.log(req);
    // vérifier si tous les champs sont remplis

    if (!req.body.lastName  || !req.body.firstName || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({
                success: false,
                message: "tous les champs sont obligatoire"
            });
    }


    // requête vers la db afin de trouver si y a un email deja existant

    User.find({ email: req.body.email})
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
                            firstName: req.body.firstName,
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
                                            firstName: result.firstName,
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


// connexion d'utilisateur

const user_login = (req, res) => {

    //vérification des champs

    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({message: "tous les champs sont obligatoire"});
    }

    User.findOne({email: req.body.email})
        .exec()
        .then(user => {
            //Utilisateur non trouvé à partir du mail

            if (!user) {
                return res
                    .status(401)
                    .json({
                        success: false,
                        message: "Authentification échoué !"
                    });
            } 

            // déashage et comparaison des mots de passe par la librerie  bcrypt
            bcrypt.compare(req.body.password, user.password, (err, result) => {

                //comparaison échoué
                if (err) {
                    return res.status(401).json({
                        success: false,
                        message: "Authentification échoué"
                    });
                }

                //comparaison OK et signature du token par la librairie JWT
                if (result) {
                    const token = jwt.sign( 
                        {
                            email: user.email,
                            userId: user._id
                        },
                        
                        process.env.JWT_KEY,   //clé secrete du backend
                        {
                            expiresIn: "5h" //temps d'expiration du token
                        }
                    );

                    return res
                        .status(200)
                        .json({
                        success: true,
                        message: "Authentification réussi",
                        token: "JWT " + token,
                        user: {
                            userId: user._id,
                            userEmail: user.email
                        }
                    });
                }
                res.status(401).json({
                    success: false,
                    message: "Authentification échoué"
                });
            });
        })
        .catch(err => {

            res
                .status(500)
                .json({
                success: false,
                error: err
            });
        });
};

module.exports = {create_user, user_login};