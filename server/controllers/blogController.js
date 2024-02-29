const blogModel = require("../models/post.model");
class BlogController {
    static getAllBlogs = async (req, res) => {
        try {
            const fetchAllBlogs = await blogModel.find({});
            res.status(200).json({ fetchAllBlogs });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static addBlog = async (req, res) => {
       
    }
    static SingleBlog = async (req, res) => {
        res.send("Get single posts");
    }
};

module.exports = BlogController;