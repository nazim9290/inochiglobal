const express = require("express");
const router = express.Router();
const Lesson = require("../../models/JapaneseLessonModel/lessonModel");

const getLessonData = async (req, res) => {
	try {
		const result = await Lesson.find({});
        console.log(result)
		res.status(200).json(result);
        
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getLesssonByLesson = async (req, res) => {
	console.log(req.params.id)
	try {
		const result = await Lesson.find({ lesson: `${req.params.id}` });
		console.log(result)
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = router;
module.exports = { getLessonData, getLesssonByLesson};