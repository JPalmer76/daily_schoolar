const router = require("express").Router();
const teacherRegistration = require("../../Controllers/teacherscontroller");

router.route("/")
    .post(teacherRegistration.postTeacher)
<<<<<<< HEAD
    .get(teacherRegistration.retrieveTeacher);


module.exports = router;
=======
    



module.exports = router;
>>>>>>> origin
