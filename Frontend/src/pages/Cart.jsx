import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Grid, Card, CardMedia, CardContent,
  IconButton, TextField, Button, Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const initialCartItems = [
  {
    _id: "1",
    name: "Organic Tomatoes",
    price: 120,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1604335399102-8bfb6c96e444?auto=format&fit=crop&w=600&q=80",
  },
  {
    _id: "2",
    name: "Natural Honey",
    price: 250,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1621507735287-f5a5cabcfd65?auto=format&fit=crop&w=600&q=80",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item => item._id === id ? { ...item, quantity: Math.max(1, newQty) } : item)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map(item => (
            <Grid item xs={12} key={item._id}>
              <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 2 }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">₹{item.price} × {item.quantity}</Typography>
                  <Box mt={1} display="flex" alignItems="center" gap={2}>
                    <TextField
                      type="number"
                      size="small"
                      label="Qty"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                      sx={{ width: 100 }}
                    />
                    <IconButton onClick={() => handleRemoveItem(item._id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Summary Section */}
      <Box mt={4} textAlign="right">
        <Typography variant="h6">Subtotal: ₹{subtotal}</Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
