const router = require('express').Router();
const { Task } = require('../../models');

//testing route for seeing data base **********************
router.get('/', async (req,res) =>{
    try{
        const taskData = await Task.findAll();
        const tasks = taskData.map((task) => task.get({ plain:true}));

        res.status(200).json(tasks);

    } catch (err) {
        res.status(400).json(err);

}});
//************************* 

//routes for creating task
router.post('/', async (req, res) => {
    try {
      const newTask = await Task.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newTask);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//routes for deleting task 
router.delete('/:id',  async (req, res) => {
    try {
      const taskData = await Task.destroy({
        where: {
          id: req.params.id,
          //user_id: req.session.user_id,
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

//routes for updating task

module.exports = router;
