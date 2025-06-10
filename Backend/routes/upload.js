const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {protect,seller} = require('../middlewares/auth');

router.post('/',protect,seller,upload.single('image'), (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({ imagePath: `/uploads/${req.file.filename}` });
});

module.exports = router;