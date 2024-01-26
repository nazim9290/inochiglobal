const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
	word: {
		type: String,
	},
    meaning: {
		type: String,
	},
    bangla: {
		type: String,
	},
    hiragana: {
		type: String,
	},

    katakana: {
		type: String,
	},
    romaji: {
		type: String,
	},
    bangla_uccharon: {
		type: String,
	},   
    level: {
		type: Number,
		
	},
    lesson: {
		type: Number,
		
	},
});

const Lesson = mongoose.model("lesson", LessonSchema);

module.exports = Lesson;
