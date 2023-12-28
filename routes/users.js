const express = require('express');
const router = express.Router();

/**
 * GET users listing.
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  res.json({message: 'allow'});
});

module.exports = router;
