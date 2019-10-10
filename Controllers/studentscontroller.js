const db = require("../models")

module.exports = {

<<<<<<< HEAD
    postStudent: (req, res) => {
        console.log("postStudent data funtion")
        console.log(req.body);
        db.Student.create(req.body).then(dbStudent => {
            console.log("trying to save student info")
            console.log(dbStudent);
            res.json(dbStudent)
        }).catch(err => {
            res.json(err)
        })
=======
postStudent: (req, res) => {
    console.log(req.body)
    db.student.create(req.body).then(dbStudent => {
        console.log(dbStudent);
        res.json(dbStudent)
    }).catch(err => {
        res.json(err)
    })
>>>>>>> origin
    },

    retrieveStudent: (req, res) => {
        db.Student.findAll().then(dbStudent => {
            res.json(dbStudent)
        }).catch(err => {
            res.json(err)
        })
    }

}