const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

async function registerUser(req,res){
    const {name,email,password,street,apartment,city,zip,country,phone,isSeller} = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name,
            email,
            passwordHash: hashedPassword,
            street,
            apartment,
            city,
            zip,
            country,
            phone,
            isSeller
        });
        const createdUser = await user.save();
        if (!createdUser) {
            return res.status(500).json({ message: 'User registration failed' });
        }
        res.status(201).json({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isSeller: createdUser.isSeller,
            token: generateToken(createdUser._id)
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function loginUser(req, res) {
    const { email, password } = req.body;
        const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isSeller: user.isSeller,
            token: generateToken(user._id)
        });
       
    }else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
       
}
async function getUserProfile(req, res) {
    const user = await User.findById(req.user.id).select('-passwordHash');
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile
};
