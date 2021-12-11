//routes for creating users in session db
const router = require("express").Router();
const { User } = require("../../models");
const { Task } = require("../../models");

//gets all users route for testing
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["id", "ASC"]],
    });
    const users = userData.map((user) => user.get({ plain: true }));

    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});
//get task with the user name
router.get("/task", async (req, res) => {
  try {
    const tasksWithUser = await User.findAll({
      include: Task,
      required: false,
      attributes: {
        exclude: ["password", "role", "email", "manager", "date_created"],
      },
    });

    const tasks = tasksWithUser.map((task) => task.get({ plain: true }));

    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/single", async (req, res) => {
  try {
    const taskData = await Task.findAll({
      where: { user_id: req.session.user_id},
    });
    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json(err);
  }
});
//
// router.get("/char/task", async (req, res) => {
//   try {
//     const taskData = await Task.findAll({
//       where: { user_id: user_id },
//     });
//     const tasks = taskData.map((task) => task.get({ plain: true }));

//     res.status(200).json(users);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

/*--


router.get("/chart/task", async (req, res) => {
  try {
    const taskData = await Task.findAll({
      where: { user_id: req.session.user_id },
    });
    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.render("employee", {
      user,
      tasks,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

*/

module.exports = router;
