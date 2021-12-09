const router = require("express").Router();
const userRoutes = require("./userRoutes");
const taskRoutes = require("./taskRoutes");
const chartRoutes = require("./chartRoutes");

router.use("/users", userRoutes);
router.use("/task", taskRoutes);
router.use("/chart", chartRoutes);

module.exports = router;
