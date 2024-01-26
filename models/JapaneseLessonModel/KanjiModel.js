const mongoose = require("mongoose");

const KanjiSchema = new mongoose.Schema({
	category: {
		type: String,
	},
    character: {
		type: String,
	},
    onyomi: {
		type: String,
	},
    kunyomi: {
		type: String,
	},

    meaning: {
		type: String,
	},
  
});

const Kanji = mongoose.model("KanjiLists", KanjiSchema);

module.exports = Kanji;

