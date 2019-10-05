const router = require("express").Router();
const studentRegistration = require("../../Controllers/studentscontroller");

router.route("/")
    .post(studentRegistration.postStudent);

module.exports = router;