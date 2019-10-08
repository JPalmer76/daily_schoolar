const router = require("express").Router();
const taskRegistration = require("../../Controllers/taskscontroller");

router.route("/")
    .post(taskRegistration.postTask)
    .get(taskRegistration.retrieveTask);


module.exports = router;