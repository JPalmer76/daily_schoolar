const db = require("../models")

module.exports = {

    postTeacher: (req, res) => {
        db.teacher.create(req.body).then(dbTeacher => {
            console.log(dbTeacher);
            res.json(dbTeacher)
        }).catch(err => {
            res.json(err)
        })
    },

    retrieveTeacher: (req, res) => {
        db.teacher.findAll().then(dbTeacher => {
            res.json(dbTeacher)
        }).catch(err => {
            res.json(err)
        })
    }

}