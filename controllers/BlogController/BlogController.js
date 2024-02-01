const express = require("express");
const router = express.Router();
const Blogs = require("../../models/BlogsModel/blogsModel");

const getAllBlogs = async (req, res) => {
	try {
		const result = await Blogs.find({});
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
const getBlogOne = async (req, res) => {
	console.log(req.params.id)
	try {
		const result = await Blogs.findOne({ _id: `${req.params.id}` });
		//console.log(result)
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
const insertBlog = async (req, res) => {
	try {
		const data = new Blogs(req.body);
		const result = await data.save();
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const updateBlog = async (req, res) => {
   // console.log(req.params.id)
	try {
        const filter = { _id: `${req.params.id}` };
		const result = await Blogs.findOneAndUpdate(filter,req.body, {
            new: true
          });
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = router;
module.exports = { getAllBlogs,getBlogOne,insertBlog,updateBlog};