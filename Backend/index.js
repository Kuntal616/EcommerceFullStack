
// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const connectDB = require('./connection'); 
// Connect to MongoDB
connectDB();



//routes
const productsRoute = require('./routes/products');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/products', productsRoute);

app.get('/',(req,res)=>{
    res.send('Hello World from Backend! on ecommerceFullStack');      
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});