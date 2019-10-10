const router = require("express").Router();
<<<<<<< HEAD
const taskRegistration = require("../../Controllers/taskscontroller");

router.route("/")
    .post(taskRegistration.postTask)
    .get(taskRegistration.retrieveTask);
=======
const assign = require("../../Controllers/taskscontroller");

router.route("/:id")
    .put(assign.upTask)
    
router.route("/")
    .post(assign.postTask)
>>>>>>> origin


module.exports = router;