const express = require("express");
const router = express.Router();
const {getLessonData, getLesssonByLesson} = require("../../controllers/JapaneseLesson/JapaneseLesson");


router.route("/").get(getLessonData);
router.route("/:id").get(getLesssonByLesson)

module.exports = router;