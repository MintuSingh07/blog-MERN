const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () =>{
    const DB = process.env.DATABASE;

    try {
        await mongoose.connect(DB);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;