const router = require("express").Router();
const { Task } = require("../../models");

//testing route for seeing data base **********************
// api/task
router.get("/", async (req, res) => {
  try {
    const taskData = await Task.findAll();
    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json(err);
  }
});
//*************************

//routes for creating task from managers control
router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create({
      ...req.body,
    });

    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

//routes for deleting task
router.delete("/:id", async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
        //user_id: req.session.user_id,
      },
    });

    if (!taskData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//routes for updating task
//updates a task route
router.put("/", async (req, res) => {
  try {
      const updateStatus = await Task.update(
        {
          task_status: req.body.taskStatus,
        },
        {
          where: {
            id: req.body.taskId,
          },
        }
      );

    res.status(200).json(updateStatus);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
