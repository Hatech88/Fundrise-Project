//  .Router() 
const router = require('express').Router();

// define the routes 
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;