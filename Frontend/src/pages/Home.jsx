import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
// import axios from 'axios';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/products';
import CategorySection from '../components/CategorySection';
import Loader from '../components/Loader';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products (Featured or Trending)
  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => {
        setProducts([]);
        console.error('Failed to fetch products:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <HeroCarousel />
      <CategorySection />
      <Container sx={{ mt: 6 }}>
        <Typography variant="h5" mb={2}>Featured Products</Typography>
        {loading ? <Loader /> : (
          <Grid container spacing={3}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Home;
