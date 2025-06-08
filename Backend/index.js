
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
const usersRoute = require('./routes/user');
const ordersRoute = require('./routes/orders');
const categoriesRoute = require('./routes/category');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/products', productsRoute);
app.use('/api/users', usersRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/categories', categoriesRoute);

app.get('/',(req,res)=>{
    res.send('From Backend! of ecommerce FullStack project');      
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});