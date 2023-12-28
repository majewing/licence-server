const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/licence', function(req, res, next) {
  res.json({message: 'allow'});
});

module.exports = router;
