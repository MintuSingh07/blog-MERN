const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
    title: {
        type: String,
    },
});

const Catagory = mongoose.model("Catagory", catagorySchema);

module.exports = Catagory;