const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

class authController {
    static userRegister = async (req, res) => {

        const { username, email, password } = req.body;
        try {
            if (username && email && password) {
                const isUser = await User.findOne({ email: email });

                if (!isUser) {
                    //PASSWORD HASH
                    const genSalt = await bcrypt.genSalt(10);
                    const passHash = await bcrypt.hash(password, genSalt);

                    //SAVE USER
                    const newUser = new User({
                        username,
                        email,
                        password,
                    });
                    const saveUser = await newUser.save();
                    if (saveUser) {
                        res.status(200).json({ message: "User Register Successfully" });
                    }
                }
                else {
                    return res.status(400).json({ message: "Email already exists" });
                }
            }
            else {
                return res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static userLogin = async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        if (user.password !== password) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        if (user.email !== email) {
            return res.status(400).json({ error: "Email is not registered" });
        }
        res.status(200).json({ message: "Login successfully" })
    }
};

module.exports = authController;