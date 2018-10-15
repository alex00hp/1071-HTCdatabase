var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { name: '郭英杰', id: '404412214' });
});

module.exports = router;