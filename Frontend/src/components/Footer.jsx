import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'grey.900', color: 'grey.100', py: 4, mt: 8 }}>
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>ShopMate</Typography>
          <Typography variant="body2">&copy; {new Date().getFullYear()} ShopMate. All rights reserved.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom>Quick Links</Typography>
          <Link href="/" color="inherit" underline="hover" display="block">Home</Link>
          <Link href="/cart" color="inherit" underline="hover" display="block">Cart</Link>
          <Link href="/account" color="inherit" underline="hover" display="block">Account</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom>Contact</Typography>
          <Typography variant="body2">Email: support@shopmate.com</Typography>
          <Typography variant="body2">Phone: +91 12345 67890</Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
