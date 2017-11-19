var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	
	locals.section = 'bio';

	view.query('bios', keystone.list('Bio').model.find());

	// Render the view
	view.render('bio');

};
