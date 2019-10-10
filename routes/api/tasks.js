const router = require("express").Router();
const assign = require("../../Controllers/taskscontroller");

router.route("/:id")
    .put(assign.upTask)
    
router.route("/")
    .post(assign.postTask)


module.exports = router;