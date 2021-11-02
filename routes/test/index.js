// NPM
const express = require('express');

const router = express();

/*
  Health Check Endpoint
*/
router.get('/healthcheck', async (req, res) => {
  return res.send('OK');
});

module.exports = router;