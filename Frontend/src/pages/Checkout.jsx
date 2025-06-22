import React, { useState } from 'react';
import {
  Container, Typography, TextField, Grid, Button, Box, Divider
} from '@mui/material';

const mockCartItems = [
  { _id: '1', name: 'Organic Tomatoes', price: 120, quantity: 2 },
  { _id: '2', name: 'Natural Honey', price: 250, quantity: 1 },
];

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // Later: call backend POST /checkout with form + cart
  };

  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>

      <Grid container spacing={4}>
        {/* Billing Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Billing Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleChange} />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label="State" name="state" value={formData.state} onChange={handleChange} />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label="Zip" name="zip" value={formData.zip} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Order Summary</Typography>
          <Box border={1} borderColor="grey.300" borderRadius={2} p={2}>
            {mockCartItems.map(item => (
              <Box key={item._id} display="flex" justifyContent="space-between" mb={1}>
                <Typography>{item.name} × {item.quantity}</Typography>
                <Typography>₹{item.price * item.quantity}</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">₹{total}</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
