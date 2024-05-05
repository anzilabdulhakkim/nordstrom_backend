const UserModel = require("../../Models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ msg: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      first_name,
      last_name,
    });

    await newUser.save();
    res.status(200).json({ message: "User saved successfully", newUser });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = registerUser;
