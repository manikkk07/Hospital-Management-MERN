import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15d" }
  );
};

// Register
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;

    if (role === 'patient') {
      user = await User.findOne({ email });
    } else if (role === 'doctor') {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    if (role === 'patient') {
      user = new User({ name, email, password, photo, gender, role });
    } else if (role === 'doctor') {
      user = new Doctor({ name, email, password, photo, gender, role });
    }

    await user.save();

    res.status(201).json({ success: true, message: 'User successfully created' });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ success: false, message: 'Internal server error. Try again.' });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email }) || await Doctor.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user);

    const { password: userPassword, appointments, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Successfully logged in",
      token,
      data: { ...rest },
      role: user.role,
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
