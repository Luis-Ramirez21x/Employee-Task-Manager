const router = require('express').Router();
const { Task, User } = require('../models');
const withAuth = require('../utils/auth');


//hompage route
router.get('/', async (req, res) => {
    try {
        const taskData = await User.findAll();
        //const task = taskData.get({plain:true});
        res.json(taskData);
        //res.render('login');
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

module.exports = router;