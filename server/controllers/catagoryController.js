const catagoryModel = require("../models/catagory.model");

class CatagoryController {
    static getAllCatagories = async (req, res) => {
        try {
            const fetchAllCatagories = await catagoryModel.find({});
            res.status(200).json(fetchAllCatagories);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    static addCatagory = async (req, res) => {
        const { title } = req.body;
        try {
            if (title) {
                const newCatagory = new catagoryModel({
                    title
                });
                const saveCatagory = await newCatagory.save();
                if (saveCatagory) {
                    res.status(200).json({ message: "Catagory added successfully" });
                }
            }
            else {
                res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }

    }
}
module.exports = CatagoryController;