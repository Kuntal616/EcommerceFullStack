import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, TextField, Container, Grid } from '@mui/material';
import mockdata from '../data/data'; // replace later with real API

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = mockdata.find(p => p._id === id);
    if (found) setProduct(found);
  }, [id]);

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart`);
    // later call backend POST /cart
  };

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>{product.name}</Typography>
          <Typography variant="h6" color="green">₹{product.price}</Typography>
          <Typography variant="body1" mt={2}>This is a placeholder description for {product.name}. Replace with real content later.</Typography>

          <Box mt={3} display="flex" alignItems="center" gap={2}>
            <TextField
              type="number"
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              size="small"
              style={{ width: '100px' }}
            />
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
