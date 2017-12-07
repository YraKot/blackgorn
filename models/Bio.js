var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Bio = new keystone.List('Bio', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Bio.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	description: { type: Types.Html, wysiwyg: true, height: 250 },
});

Bio.register();
