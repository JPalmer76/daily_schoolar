const db = require("../models")  

module.exports = {

postStudent: (req, res) => {
    db.student.create(req.body).then(dbStudent => {
        console.log(dbStudent);
        res.json(dbStudent)
    }).catch(err => {
        res.json(err)
    })
    }

}