//routes for creating users in session db
const router = require("express").Router();
const { User } = require("../../models");
const { Task } = require("../../models");

//gets all users route for testing
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["date_created"], exclude: ["password"] },
      order: [["id", "ASC"]],
    });
    const users = userData.map((user) => user.get({ plain: true }));

    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/task", async (req, res) => {
  try {
    const taskData = await Task.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json(err);
  }
});

//router.get("/chart/", async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["id", "ASC"]],
//     });
//     const users = userData.map((user) => user.get({ plain: true }));

//     res.status(200).json(users);
//   } catch (err) {
//     res.status(400).json(err);
//   }
//
// });
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
