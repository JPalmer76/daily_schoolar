const db = require("../models")

module.exports = {

postStudent: (req, res) => {
    console.log(req.body)
    db.student.create(req.body).then(dbStudent => {
        console.log(dbStudent);
        res.json(dbStudent)
    }).catch(err => {
        res.json(err)
    })
    },

    retrieveStudent: (req, res) => {
        db.student.findAll().then(dbStudent => {
            res.json(dbStudent)
        }).catch(err => {
            res.json(err)
        })
    }

}