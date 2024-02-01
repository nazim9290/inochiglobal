const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const user = require("./routers/UserRouter/UserRouter");
const businessCardUser = require("./routers/BusinessCardRouter/BusinessCardRouter");
const getLessonDatas = require("./routers/JapaneseLesson/LessonRouter");
const getKanjiData = require("./routers/JapaneseLesson/KanjiRouter");
const blogsData = require("./routers/BlogsRouter/BlogsRouter")



app.use(cors());
app.use(express.json());

//custom api end point
app.use("/user", user);
app.use("/businessMember", businessCardUser);
app.use("/lesson", getLessonDatas);
app.use("/kanji", getKanjiData);
app.use("/blog",blogsData);


module.exports = app;