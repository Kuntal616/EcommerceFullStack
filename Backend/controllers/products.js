function listProducts(req, res) {
    res.send("List of products");
}
function createProduct(req, res) {
    const newProduct = req.body; 
    res.status(201).send(`Product created: ${JSON.stringify(newProduct)}`);
}
function getProductById(req, res) { 
    const productId = req.params.id; 
    res.send(`Product details for ID ${productId}`);
}
function updateProduct(req, res) {
    const productId = req.params.id;
    const updatedProduct = req.body; 
    res.send(`Product with ID ${productId} updated: ${JSON.stringify(updatedProduct)}`);
}
function deleteProduct(req, res) {
    const productId = req.params.id; 
    res.send(`Product with ID ${productId} deleted`);
}


module.exports = {
    listProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
};