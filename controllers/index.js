// Creates an instance of Express router
const router = require('express').Router();

// Importing the API routes module
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Mounting the API routes module under the '/api' path
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Output when the route is not found. 
router.use((req, res) => {
    res.status(404).end();
  });

// Exports the router instance
module.exports = router;
