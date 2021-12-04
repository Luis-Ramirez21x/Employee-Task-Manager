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
router.get('/dashboard', async (req,res) => {
  try {
    //finding user bases on session id
    const userData = await User.findByPk(req.session.user_id, {
      attributes: ['name', 'role'],
    });

    //serializing
    const user = userData.get({ plain:true });

    //passing user name and role using that on front end to display certain elements
    //possibly also pass along logged_in: req.session.logged_in
    res.render('dashboard', {user});  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;