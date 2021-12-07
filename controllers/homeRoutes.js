const router = require('express').Router();
const { Task, User } = require('../models');
const withAuth = require('../utils/auth');


//hompage route
router.get('/', async (req, res) => {
    try {
        res.render('login');  
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

//loginn with auth view will depend on your employee role 
router.get('/dashboard',withAuth ,async (req,res) => {
  try {
    //finding user bases on session id
    const userData = await User.findByPk(req.session.user_id, {
      attributes: ['name', 'role', 'manager'],
    });
    //serializing
    const user = userData.get({ plain:true });

    //getting all employees and their tasks 
    const tasksWithUser = await User.findAll({ include: Task, required:false });
    
   //serializing
    const employeeTasks = tasksWithUser.map((task) => task.get({ plain:true }));
    console.log(employeeTasks);
    
   

    //finds task for logged in user
    //user for employee only
    /*const taskData = await Task.findAll({
      where:{ user_id: req.session.user_id},
      attributes: ['title', 'description', 'date_created'],
    });
    const tasks = taskData.map((task) => task.get({ plain:true}));
      */  
    
    res.render('testDashboard', {
      user,
      employeeTasks
    });  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;