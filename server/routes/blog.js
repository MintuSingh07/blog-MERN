const express = require('express');
const authController = require('../controllers/authController');
const BlogController = require("../controllers/blogController");
const CatagoryController = require('../controllers/catagoryController');
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/upload/`);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post("/auth/user/login", authController.userLogin);
router.post("/auth/user/register", authController.userRegister);

// Protected Routes

router.get("/blogs", BlogController.getAllBlogs);
router.post("/add_blogs",upload.single("thumbnail"), BlogController.addBlog);
router.get("/blog/:id", BlogController.SingleBlog);

router.get("/catagories", CatagoryController.getAllCatagories);
router.post("/addcatagory", CatagoryController.addCatagory);


module.exports = router;