const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');

// path for the home page
router.use('/', homeRoutes);

// path for the server for the API routes
router.use('/api', apiRoutes);

// path for the dashboard
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;