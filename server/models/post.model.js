const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        require: true,
    },
    titel: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    catagory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Catagory",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;