const express = require("express");
const router = express.Router();
const Kanjilist = require("../../models/JapaneseLessonModel/KanjiModel");
const KanjiDetail = require("../../models/JapaneseLessonModel/KanjiDeatilModel");


const getKanjiData = async (req, res) => {
	try {
		const result = await Kanjilist.find({});
		res.status(200).json(result);
        
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getKanjiOne = async (req, res) => {
	console.log(req.params.id)
	try {
		const result = await KanjiDetail.findOne({'kanji.character': `${req.params.id}` });
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}

};

module.exports = router;
module.exports = { getKanjiData, getKanjiOne};