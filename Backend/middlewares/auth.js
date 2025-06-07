const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function protect(req,res,next){
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-passwordHash');
        next();
    } catch (error) {
        console.error('Error in auth middleware:', error);
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
}
// Middleware to check if the user is a seller
async function seller(req, res, next) {
    if (req.user && req.user.isSeller) {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
}

module.exports = { protect , seller };