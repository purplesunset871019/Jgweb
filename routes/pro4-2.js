var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pro4-2', { title: '駿金有限公司' });
});

module.exports = router;
