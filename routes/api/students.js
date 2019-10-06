const router = require("express").Router();
const studentRegistration = require("../../Controllers/studentscontroller");

router.route("/")
    .post(studentRegistration.postStudent)
    .get(studentRegistration.retrieveStudent);



module.exports = router;