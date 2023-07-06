// Creates an instance of Express router
const router = require('express').Router();

// Imports the user and event routes module
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');

// Mounts the users and event routes under certain paths
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

// Exports the router instance
module.exports = router;
