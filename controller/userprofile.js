const db = require('../models')
const UserProfile = db.UserProfile;
const Op = db.Sequelize.Op;

module.exports = {
    create: (req, res) => {
        return UserProfile.create({
            name: req.body.name,
            lastname: req.body.lastname,
            publickey: req.body.publickey
        })
        .then( data => { 
            res.status(201).send(data) 
        } )
        .catch( error => { 
            res.status(400).send({
                message:
                    error.message || "Some error occurred while creating UserProfile."
            }) 
        })
    },

    findAll: (req, res) => {
    UserProfile.findAll()
        .then(data => { res.send(data); })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Some error occurred while retrieving UserProfile by lastname"
            });
        });
    },

    findAllByLastName: (req, res) => {
    const lastname = req.query.lastname;
    var condition = lastname ? { lastname: { [Op.like]: `%${lastname}%` } } : null;
    UserProfile.findAll({ where: condition })
        .then(data => { res.send(data); })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Some error occurred while retrieving UserProfile by lastname"
            });
        });
    },

    findOne: (req, res) => {
        const id = req.params.id;
        UserProfile.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving UserProfile with id=" + id
                });
            });
    },

    update: (req, res) => {
        const id = req.params.id;
        UserProfile.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "UserProfile was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update UserProfile with id=${id}. Maybe UserProfile was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating UserProfile with id=" + id
                });
            });
    },

    delete: (req, res) => {
        const id = req.params.id;
        UserProfile.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "UserProfile was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete UserProfile with id=${id}. Maybe UserProfile was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete UserProfile with id=" + id
                });
            });
    },

    deleteAll: (req, res) => {
        UserProfile.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} UserProfiles were deleted successfully!` });
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all UserProfiles."
                });
            });
    }

}




