const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.send('Products route is working!');
}).post('/', (req, res) => {
    // Here you would typically handle the creation of a new product
    res.send('Product created successfully!');
}).put('/:id', (req, res) => {
    const productId = req.params.id;
    // Here you would typically handle the update of a product by its ID
    res.send(`Product with ID ${productId} updated successfully!`);
}).delete('/:id', (req, res) => {
    const productId = req.params.id;
    // Here you would typically handle the deletion of a product by its ID
    res.send(`Product with ID ${productId} deleted successfully!`);
});

module.exports = router;