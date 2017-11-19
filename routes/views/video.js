var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'video';

	view.query('videos', keystone.list('Video').model.find());

	// Render the view
	view.render('video');

};
