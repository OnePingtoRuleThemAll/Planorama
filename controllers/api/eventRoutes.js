const router = require('express').Router();

const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

//route to create a events
router.post('/', withAuth, async (req,res) => {
    const body = req.body;
    try{
        const newEvent = await Event.create({
            ...body,
            userId: req.session.userId,
        });

        res.json(newEvent);
    } catch (err) { 
       res.status(400).json(err);
    }
});

//route to delete a events
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!eventData){
            res.status(404).json({ message: 'No Event found with this id!!'});
            return;
        }
        res.status(200).json(eventData);
    } catch(err){
        res.status(500).json(err);
    }

});

// Exports the router instance
module.exports = router;