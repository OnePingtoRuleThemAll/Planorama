const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async(req, res) => {

    try{
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
            console.log("User has now been created");
        });
    } catch(err) {
        res.status(400).json(err);
        console.log("Cannot create user!");
    }
});

router.post('/login', async (req, res) =>{
    try {
        const userData = await User.findOne({ where: { email:req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({message: 'User does not exist in the database'});
                console.log("User does not exist in the database ");
                return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password, please try again'});
            console.log('Incorrect password, please try again');
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!'});
            console.log('User is now logged in!');
        });
        
    } catch(err) {
        res.status(400).json(err);
    }

});

router.post('/logout', (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() =>{
            res.status(204).end()
            console.log('User is now logged out');
        });
    } else {
        res.status(404).end();
        
    }
});

module.exports = router;