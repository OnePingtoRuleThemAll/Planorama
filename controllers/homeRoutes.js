const router = require('express').Router();
const { Event, User }= require('../models');
const withAuth = require('../utils/auth');

//Get all the events and JOIN with user data
router.get('/', async (req, res) => {
    try{
        // Get all events and JOIN with user
        const eventData = await Event.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });

        // Serialize data so the template can read it
        const events = eventData.map((event) => event.get({plain: true}));

        // Pass serialized data and session flag into template
        res.render('event', {
            events,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }

});

router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    console.log(eventData);
    const data = eventData.get({ plain: true });
    console.log(data);

    res.render('event', {
      ...data,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Event }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/login', (req, res) => { 
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

module.exports = router;