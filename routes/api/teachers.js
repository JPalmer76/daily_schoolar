const router = require("express").Router();
const teacherRegistration = require("../../Controllers/teacherscontroller");

router.route("/")
    .post(teacherRegistration.postTeacher)
    .get(teacherRegistration.retrieveTeacher);


module.exports = router;
