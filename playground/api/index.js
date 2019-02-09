const router = require('express').Router();

router.use('/users', require('./users/users.routes'));
router.use('/health', require('./health/health.routes'));

module.exports = router;