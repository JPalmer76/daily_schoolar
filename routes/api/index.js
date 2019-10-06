const router = require("express").Router();
const studentRoutes = require("./students");

router.use("/students", studentRoutes);

module.exports = router;