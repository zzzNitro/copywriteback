const { Router } = require('express');
const router = Router();
const text = require('./textRoute');

router.use('/', text);

module.exports = router;