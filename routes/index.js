const router = require('express').Router();
const apiRoutes = require('./api');

// Linking routes inside api folder with /api
router.use('/api', apiRoutes);

module.exports = router;
