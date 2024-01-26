const mongoose = require("mongoose");

const businessCardUserSchema = new mongoose.Schema({
	position: {
		type: Number
	},
	fullName: {
		type: String
	},
	profileID: {
		type: String
	},
	title: {
		type: String
	},
	image: {
		type: String
	},
	shortDesc: {
		type: String
	},
	email: {
		type: String
	},
	address: {
		type: String
	},
	gender: {
		type: String
	},
	sns: {
		phone: {
			type: String
		},
		fb: {
			type: String
		},
		inst: {
			type: String
		},
		twt: {
			type: String
		}
	},
	company: {
		parent: {
			type: String
		},
		sisters1: {
			type: String
		},
		sisters2: {
			type: String
		}
	}
});

const businessCardUser = mongoose.model("businessCard", businessCardUserSchema);

module.exports = businessCardUser;