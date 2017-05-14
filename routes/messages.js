var express = require('express');
var models = require('../models/index');
var Message = models.message;
var router = express.Router();


// // Index.
router.get('/', function(request, response) {
	Message.findAll().then(function(messages) {
		response.render('messages/index', {
			messages: messages
		});
	});
});

// Create.
router.post('/', function(request, response) {
	Message.create({
		title: request.body.title,
		body:  request.body.body,
	}).then(function(messages) {
		response.redirect('/messages');
	});
});



module.exports = router;
