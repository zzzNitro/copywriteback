const { Router } = require('express');
const router = Router();
const { getText } = require('./textController');

router.get('/', getText);

module.exports = router;