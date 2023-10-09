const User = require("../models/User");
const jwt = require("jsonwebtoken");

let JWT_SEC_KEY = process.env.JWT_SEC_KEY;

// SIGN UP Controller
const handleSignUp = async (req, res) => {
  const { fullName, email, password } = req.body;

  // check if the email is already Registered.
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ error: "Email Already Registered Try Forget Password" });
    }
    user = await User.create({
      fullName,
      email,
      password,
    });

    const payload = {
      user: {
        id: user._id,
        email: user.email,
      },
    };

    let authtoken = jwt.sign(payload, JWT_SEC_KEY);
    res.json({ authtoken });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// LOGIN CONTROLLER
const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.matchPassword(email, password);
    console.log(user);

    const payload = {
      user: {
        id: user._id,
        email: user.email,
      },
    };

    // Create JWT token
    let authtoken = jwt.sign(payload, JWT_SEC_KEY);
    res.json({ authtoken });
  } catch (error) {
    res.status(200).json({ error });
  }
};

module.exports = {
  handleSignUp,
  handleLogin,
};
