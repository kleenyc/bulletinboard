var express = require('express');
var router = express.Router();


// Index.
router.get('/', function(request, response) {
	response.render('index/index');
});


module.exports = router;
