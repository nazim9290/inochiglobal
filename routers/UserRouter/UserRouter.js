const express = require("express");
const router = express.Router();
const {
	getAllUser,
	insertUser,
} = require("../../controllers/User/UserController");

router.route("/").get(getAllUser).post(insertUser);

module.exports = router;