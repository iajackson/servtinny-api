// NPM
const express = require('express');

// Routes
const test = require('./test');

const router = express();

// Routes
router.use('/v1/', test);

module.exports = router;