const express = require("express");
const router = express.Router();
const businessCardUser = require("../../models/Business-card/businessCardUser");

const getBusinessAllUser = async (req, res) => {
	try {
		const result = await businessCardUser.find({});
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getBusinessAllUserID = async (req, res) => {
	try {
		const result = await businessCardUser.find({}, '_id');
		console.log(result);
		res.status(200).json(result);

	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getBusinessUserById = async (req, res) => {
	console.log(req.params.id)
	try {
		const result = await businessCardUser.findOne({ profileID: `${req.params.id}` });
		console.log(result)
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const insertBusinessUser = async (req, res) => {
	try {
		const data = req.body;
		const result = await businessCardUser.save(data);
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = router;
module.exports = { getBusinessAllUser, insertBusinessUser, getBusinessUserById, getBusinessAllUserID };