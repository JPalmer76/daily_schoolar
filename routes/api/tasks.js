const router = require("express").Router();
const assign = require("../../Controllers/taskscontroller");

router.route("/:id")
    .post(assign.postTask)
    .put(assign.upTask)
    



module.exports = router;