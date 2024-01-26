const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: true
	},
	text: {
		type: String,
		trim: true,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	// a blog post can have multiple comments, so it should be in a array.
	// all comments info should be kept in this array of this blog post.
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
})

blogSchema.virtual('url').get(function () {
	return '/blog/' + this._id
})

module.exports = mongoose.model('Blog', blogSchema);