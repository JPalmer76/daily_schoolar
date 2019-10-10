const router = require("express").Router();
const studentRoutes = require("./students");
const teacherRoutes = require("./teachers");
const taskRoutes = require("./tasks");
<<<<<<< HEAD
=======

>>>>>>> origin

router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);
router.use("/tasks", taskRoutes);

router.use("/teachers", teacherRoutes);

router.use("/tasks",taskRoutes);

module.exports = router;