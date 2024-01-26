const express = require("express");
const router = express.Router();
const {getKanjiData, getKanjiOne} = require("../../controllers/JapaneseLesson/KanjiLesson");


router.route("/").get(getKanjiData);
router.route("/:id").get(getKanjiOne)

module.exports = router;