
const express = require('express');
const app = express();
//routes
const productsRoute = require('./routes/products');

//middleware
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api/products', productsRoute);

app.get('/',(req,res)=>{
    res.send('Hello World from Backend! on ecommerceFullStack');      
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});