const express = require("express");
const router = express.Router();
const User = require("../../models/User/userModel");

const getAllUser = async (req, res) => {
	try {
		const result = await User.find({});
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
const insertUser = async (req, res) => {
	try {
		const data = new User(req.body);
		const result = await data.save();
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = router;
module.exports = { getAllUser, insertUser };