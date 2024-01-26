const mongoose = require("mongoose");

const KanjiDetailSchema = new mongoose.Schema({
    "_id": {
      "type": "ObjectId"
    },
    "_rev": {
      "type": "String"
    },
    "rad_name_ja": {
      "type": "String"
    },
    "grade": {
      "type": "Number"
    },
    "hint_group": {
      "type": "Number"
    },
    "kunyomi": {
      "type": "String"
    },
    "meaning": {
      "type": "String"
    },
    "kstroke": {
      "type": "Number"
    },
    "examples": {
      "type": [
        "Mixed"
      ]
    },
    "kunyomi_ja": {
      "type": "String"
    },
    "ka_utf": {
      "type": "String"
    },
    "luminous": {
      "type": "String"
    },
    "rad_name_search": {
      "type": [
        "String"
      ]
    },
    "rad_order": {
      "type": "Number"
    },
    "txt_books": {
      "type": [
        "Mixed"
      ]
    },
    "kname": {
      "type": "String"
    },
    "rad_utf": {
      "type": "String"
    },
    "stroketimes": {
      "type": [
        "Number"
      ]
    },
    "kunyomi_ka_display": {
      "type": "String"
    },
    "dick": {
      "type": "Date"
    },
    "rad_name": {
      "type": "String"
    },
    "dicn": {
      "type": "Date"
    },
    "mn_hint": {
      "type": "String"
    },
    "rad_stroke": {
      "type": "Number"
    },
    "onyomi_ja": {
      "type": "String"
    },
    "rad_meaning": {
      "type": "String"
    },
    "onyomi": {
      "type": "String"
    },
    "ka_id": {
      "type": "String"
    },
    "onyomi_search": {
      "type": [
        "String"
      ]
    },
    "kunyomi_search": {
      "type": [
        "String"
      ]
    },
    "meaning_search": {
      "type": [
        "String"
      ]
    },
    "onyomi_ja_search": {
      "type": [
        "String"
      ]
    },
    "kunyomi_ja_search": {
      "type": [
        "String"
      ]
    },
    "rad_meaning_search": {
      "type": [
        "String"
      ]
    },
    "rad_name_ja_search": {
      "type": [
        "String"
      ]
    },
    "rad_position_ja": {
      "type": "String"
    },
    "rad_position": {
      "type": "String"
    },
    "rad_position_search": {
      "type": [
        "String"
      ]
    },
    "rad_position_ja_search": {
      "type": [
        "String"
      ]
    },
    "textbook_search": {
      "type": [
        "String"
      ]
    },
    "rad_name_file": {
      "type": "String"
    },
    "kanji": {
      "character": {
        "type": "String"
      },
      "meaning": {
        "english": {
          "type": "String"
        }
      },
      "strokes": {
        "count": {
          "type": "Number"
        },
        "timings": {
          "type": [
            "Number"
          ]
        },
        "images": {
          "type": [
            "String"
          ]
        }
      },
      "onyomi": {
        "romaji": {
          "type": "String"
        },
        "katakana": {
          "type": "String"
        }
      },
      "kunyomi": {
        "romaji": {
          "type": "String"
        },
        "hiragana": {
          "type": "String"
        }
      },
      "video": {
        "poster": {
          "type": "String"
        },
        "mp4": {
          "type": "String"
        },
        "webm": {
          "type": "String"
        }
      }
    },
    "radical": {
      "character": {
        "type": "String"
      },
      "strokes": {
        "type": "Number"
      },
      "image": {
        "type": "String"
      },
      "position": {
        "hiragana": {
          "type": "String"
        },
        "romaji": {
          "type": "String"
        },
        "icon": {
          "type": "String"
        }
      },
      "name": {
        "hiragana": {
          "type": "String"
        },
        "romaji": {
          "type": "String"
        }
      },
      "meaning": {
        "english": {
          "type": "String"
        }
      },
      "animation": {
        "type": [
          "String"
        ]
      }
    },
    "references": {
      "grade": {
        "type": "Number"
      },
      "kodansha": {
        "type": "Date"
      },
      "classic_nelson": {
        "type": "Date"
      }
    }
  });

const KanjiDetail = mongoose.model("KanjiDetails", KanjiDetailSchema);

module.exports = KanjiDetail;

