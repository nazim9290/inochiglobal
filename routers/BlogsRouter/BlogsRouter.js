const express = require("express");
const router = express.Router();
const {
	getAllBlogs,insertBlog,getBlogOne,updateBlog
} = require("../../controllers/BlogController/BlogController");

router.route("/").get(getAllBlogs).post(insertBlog);
router.route("/:id").get(getBlogOne);
router.route("/:id").put(updateBlog)

module.exports = router;