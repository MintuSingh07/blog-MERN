const express = require('express');
const connectDB = require('./db/db')
const cors = require('cors');
const blog = require('./routes/blog');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res)=>{
    res.send("hello")
})

// REGISTER & LOGIN
app.use("/api", blog)

app.listen(PORT, ()=>{
    console.log(`Server is on port no ${PORT}`);
})