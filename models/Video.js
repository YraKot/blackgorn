var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Video Model
 * =============
 */

var Video = new keystone.List('Video', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Video.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Video.register();
