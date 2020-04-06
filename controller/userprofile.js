const UserProfile = require('../models').UserProfile;

module.exports = {
    create(req, res){
        return UserProfile.create({
            name: req.body.name,
            lastname: req.body.lastname,
            publickey: req.body.publickey
        })
        .then( UserProfile => { res.status(201).send(UserProfile) } )
        .catch( error => { res.status(400).send(error) } )
    }
}